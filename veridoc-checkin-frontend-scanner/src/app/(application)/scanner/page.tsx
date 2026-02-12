
import Image from "next/image";
import ErrorAnimation from "@/src/components/animations/ErrorAnimation";
import ScannerPageDetails from "@/src/components/scanner/ScannerPageDetails";
import AppHeader from "@/src/components/common/Header";
import { Metadata } from "next";
import AppFooter from "@/src/components/common/Footer";

export const metadata: Metadata = {
  title: "Scan QR Code",
};


export default function ScanQR() {
  return (
    <>
      <AppHeader />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
        {/* <ErrorAnimation /> */}
        <ScannerPageDetails />
      </div>
      <AppFooter/>
    </>
  );
}