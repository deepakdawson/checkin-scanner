"use client";

import { Card, Button } from "@heroui/react";
import { Camera, Zap } from "lucide-react";

export default function ScanQR() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white pt-[40px]">

      {/* Title */}
      <h2 className="text-[20px] font-semibold text-green-600 mb-[20px]">
        Scan a QR
      </h2>

      {/* Camera Container */}
      <Card className="w-[320px] h-[460px] rounded-[18px] overflow-hidden relative">

        <div className="p-0 relative h-full">

          {/* Camera Placeholder */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Scan Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-white opacity-80" />

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#d9d9d9] py-[10px]">

            <div className="flex justify-center gap-[20px] mb-[6px]">

              <Button isIconOnly className="rounded-full bg-white shadow">
                <Camera size={18} />
              </Button>

              <Button isIconOnly className="rounded-full bg-green-600 text-white shadow">
                <Zap size={18} />
              </Button>

            </div>

            <p className="text-[12px] text-center text-[#555]">
              Please center the icon in the middle of the code to scan
            </p>

          </div>

        </div>

      </Card>

    </div>
  );
}
