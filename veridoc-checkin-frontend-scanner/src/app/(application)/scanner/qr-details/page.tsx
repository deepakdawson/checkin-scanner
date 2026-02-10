import Image from "next/image";
import ErrorAnimation from "@/src/components/animations/ErrorAnimation";
import { Metadata } from "next";
import QrScanDetailsConfirm from "@/src/components/scanner/QrScanDetailsConfirm";
import VisitorService from "@/src/services/visitorService";
import { redirect } from "next/navigation";
import { ServerCommonResponse } from "@/src/models/response/ServerResponse";


export const metadata: Metadata = {
  title: "Confirm Scan Details",
};

export default async function QrScanDetailsPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {

  const token = (await searchParams).token;
  const location = (await searchParams).location;
  if (!token || !location) {
    redirect('/scanner');
  }
  const services = new VisitorService();
  try {
    const response = await services.getScannedQrDetails(token);
    return (
      <main>
        <div>
          <ErrorAnimation />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center min-h-screen">
              <div className="login-div p-[40px] w-[600px] rounded-[20px] bg-white z-0 shadow-login">
                <div>
                  {/* Logo */}
                  <Image
                    src="/logo_h_Black.webp"
                    height={100}
                    width={500}
                    alt=""
                    className="max-w-[300px] mx-auto"
                  />
                  {/* Title */}
                  <h1 className="text-[24px] text-center font-semibold mt-6 text-green-600">
                    Confirm Scan Details
                  </h1>
                  {/* FORM COMPONENT */}
                  <QrScanDetailsConfirm params={response} location={location} token={token} />
                </div>  
              </div>
            </div>
          </div>
        </div>
      </main>
    );

  } catch (e) {
    const error = e as ServerCommonResponse;
    if (error.code == 401) {
      redirect('/');
    }
  }
}
