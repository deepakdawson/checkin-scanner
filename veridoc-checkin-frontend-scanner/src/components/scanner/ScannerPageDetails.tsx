'use client'
import { Button } from "@heroui/react";
import { Html5Qrcode } from "html5-qrcode";
import { Camera, Zap } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type UserLocation = {
  lattitude: number,
  longitude: number
}

export default function ScannerPageDetails() {

  const router = useRouter();

  const qrRef = useRef<Html5Qrcode | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState("");
  const [isBackCamera, setIsBackCamera] = useState(true);
  const [availableCameras, setAvailableCameras] = useState<string[]>([]);
  const [userLocation, setUserLocation] = useState<UserLocation>();
  const [isLocationError, setIsLocationError] = useState<boolean>(false);

  // Define callback functions with useCallback so they don't change
  const onScanSuccess = useCallback((decodedText: string) => {
    setScanResult(decodedText);
    handleQRCodeScanned(decodedText);
  }, []);

  const onScanError = useCallback((errorMessage: string) => {
    if (!errorMessage.includes("NotFoundException")) {
      console.log("Scan error:", errorMessage);
    }
  }, []);

  const handleQRCodeScanned = (decodedText: string) => {
    const url = new URL(decodedText);
    const token = url.searchParams.get('token');

    if (token && userLocation?.lattitude && userLocation.longitude) {
      router.push(`/scanner/qr-details?token=${token}&lat=${userLocation?.lattitude}&lng=${userLocation?.longitude}`);
    }
  };

  useEffect(() => {
    const initializeScanner = async () => {
      try {
        // Get available cameras
        const devices = await Html5Qrcode.getCameras();
        if (devices && devices.length > 0) {
          setAvailableCameras(devices.map(d => d.id));
          console.log("Available cameras:", devices);

          // Start with back camera if available
          const backCamera = devices.find(d =>
            d.label.toLowerCase().includes('back') ||
            d.label.toLowerCase().includes('rear')
          );

          const frontCamera = devices.find(d =>
            d.label.toLowerCase().includes('front') ||
            d.label.toLowerCase().includes('user')
          );

          startScanner(isBackCamera ? backCamera?.id : frontCamera?.id);
        } else {
          // Fallback to generic facingMode
          startScanner();
        }
      } catch (err) {
        console.error("Could not get cameras:", err);
        // Fallback to generic facingMode
        startScanner();
      }
    };

    const startScanner = async (cameraId?: string) => {
      // Clean up existing scanner
      if (qrRef.current && qrRef.current.isScanning) {
        await qrRef.current.stop();
      }

      const scanner = new Html5Qrcode("qr-reader");
      qrRef.current = scanner;

      try {
        const config = {
          fps: 10,
          qrbox: { width: 250, height: 250 },
        };

        if (cameraId) {
          // Use specific camera ID
          await scanner.start(
            cameraId,
            config,
            onScanSuccess,
            onScanError
          );
        } else {
          // Use facingMode as fallback
          await scanner.start(
            { facingMode: isBackCamera ? "environment" : "user" },
            config,
            onScanSuccess,
            onScanError
          );
        }

        console.log(`Scanner started with ${isBackCamera ? 'back' : 'front'} camera`);
        setIsScanning(true);
      } catch (err) {
        console.error("Failed to start scanner:", err);
        setIsScanning(false);

        // Try opposite camera if one fails
        if (cameraId) {
          const devices = await Html5Qrcode.getCameras();
          const oppositeCamera = devices.find(d => d.id !== cameraId);
          if (oppositeCamera) {
            console.log("Trying opposite camera");
            setIsBackCamera(!isBackCamera);
            await startScanner(oppositeCamera.id);
          }
        }
      }
    };

    initializeScanner();

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lattitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (err) => {
        setIsLocationError(true);
      }
    );
    // Cleanup
    return () => {
      if (qrRef.current && qrRef.current.isScanning) {
        qrRef.current.stop().then(() => {
          console.log("Scanner stopped on cleanup");
        }).catch(() => { });
      }
    };
  }, [isBackCamera, onScanSuccess, onScanError]); // Re-run when camera changes or callbacks change


  const toggleCamera = async () => {
    if (!qrRef.current) {
      console.log("Scanner not initialized");
      return;
    }

    try {
      // Stop current scanner
      await qrRef.current.stop();
      console.log("Camera stopped for switching");

      // Get available cameras
      const devices = await Html5Qrcode.getCameras();

      if (devices && devices.length > 0) {
        // Find current and opposite cameras
        const currentLabel = isBackCamera ? 'back' : 'front';
        const oppositeLabel = isBackCamera ? 'front' : 'back';

        // Try to find the opposite camera
        let oppositeCamera = null;

        if (isBackCamera) {
          // Switching from back to front
          oppositeCamera = devices.find(d =>
            d.label.toLowerCase().includes('front') ||
            d.label.toLowerCase().includes('user')
          );
        } else {
          // Switching from front to back
          oppositeCamera = devices.find(d =>
            d.label.toLowerCase().includes('back') ||
            d.label.toLowerCase().includes('rear')
          );
        }

        // If specific camera not found, try any other camera
        if (!oppositeCamera && devices.length > 1) {
          const currentDevice = devices.find(d =>
            isBackCamera ?
              d.label.toLowerCase().includes('back') || d.label.toLowerCase().includes('rear') :
              d.label.toLowerCase().includes('front') || d.label.toLowerCase().includes('user')
          );

          if (currentDevice) {
            oppositeCamera = devices.find(d => d.id !== currentDevice.id);
          }
        }

        if (oppositeCamera) {
          // Start with opposite camera
          await qrRef.current.start(
            oppositeCamera.id,
            {
              fps: 10,
              qrbox: { width: 250, height: 250 },
            },
            onScanSuccess,
            onScanError
          );

          setIsBackCamera(!isBackCamera);
          console.log(`Switched to ${oppositeLabel} camera: ${oppositeCamera.label}`);
        } else {
          // Fallback: just toggle state and restart with facingMode
          console.log("No opposite camera found, using facingMode");
          setIsBackCamera(!isBackCamera);
          // The useEffect will restart the scanner with new facingMode
        }
      } else {
        // No cameras detected, just toggle state
        console.log("No cameras detected");
        setIsBackCamera(!isBackCamera);
      }

    } catch (err) {
      console.error("Failed to toggle camera:", err);
      // Just toggle the state and let useEffect handle restart
      setIsBackCamera(!isBackCamera);
    }
  };


  const handleRescan = () => {
    setScanResult("");
  };


  const handleScanButtonClick = () => {
    if (scanResult) {
      handleQRCodeScanned(scanResult);
    } else {
      console.log("No QR code scanned yet");
      alert("Please scan a QR code first");
    }
  };


  return (
    <>
      <div className="w-full max-w-md relative">
        {/* Camera Feed with Frame */}
        <div className="relative w-full md:h-[338px] xs:h-auto rounded-3xl overflow-hidden border-[5px] border-green-600">
          {/* Camera Feed */}
          <div id="qr-reader" className="absolute inset-0" />
          {/* Semi-transparent Overlay */}
          <div className="absolute inset-0 bg-black/30" />
          {/* Centered QR Frame */}
          <div className="absolute inset-0 flex items-center justify-center sm:h-[400px] xs:h-auto">
            <div className="w-54 h-54 border-2 border-white/70 rounded-xl relative md:bottom-[36px]">
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-white rounded-tl" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-white rounded-tr" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-white rounded-bl" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-white rounded-br" />
              <div className="absolute top-0 left-0 right-0 h-1 bg-green-500 animate-scan-line" />
            </div>
          </div>
        </div>
        {/* Instructions */}
        <div className="bottom-0 left-0 right-0 text-center">
          <p className="text-green-600 text-[22px] font-medium px-4 pt-[15px]">
            Please center the QR code in the middle of the frame to scan
          </p>
          {/* {scanResult && (
            <p className="text-green-700 text-sm mt-2 bg-green-50 p-2 rounded">
              Scanned: {scanResult.substring(0, 30)}...
              <button
                onClick={handleRescan}
                className="ml-2 text-blue-600 underline text-xs"
              >
                Scan another
              </button>
            </p>
          )} */}
          {!isScanning && (
            <p className="text-red-500 text-sm mt-2">
              Camera not active. Please refresh the page.
            </p>
          )}
          {isLocationError && (
            <p className="text-red-500 text-sm mt-2">
              Location permission not given. Please refresh the page. 
            </p>
          )}
          <p className="text-gray-500 text-xs mt-1">
            Camera: {isBackCamera ? "Back" : "Front"} |
            Status: {isScanning ? "Scanning..." : "Not scanning"}
          </p>
        </div>

        {/* Control Buttons */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="flex justify-center gap-8">
            <Button
              onClick={toggleCamera}
              className="rounded-full w-16 h-16 bg-white shadow-lg hover:shadow-xl transition-shadow"
              isIconOnly
            >
              <Camera size={24} className="text-gray-700" />
            </Button>

            <Button
              onClick={handleScanButtonClick}
              className="rounded-full w-16 h-16 bg-green-600 shadow-lg hover:shadow-xl transition-shadow"
              isIconOnly
            >
              <Zap size={24} className="text-white" />
            </Button>
          </div>
        </div>

      </div>
      {/* CSS animation */}
      <style jsx>{`
        @keyframes scan-line {
          0%, 100% {
            top: 0;
            opacity: 1;
          }
          50% {
            top: 100%;
            opacity: 0.8;
          }
        }
        .animate-scan-line {
          animation: scan-line 2s ease-in-out infinite;
        }
      `}</style>







    </>
  )
}