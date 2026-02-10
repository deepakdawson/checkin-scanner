import ErrorAnimation from "@/src/components/animations/ErrorAnimation";
import AppHeader from "@/src/components/common/Header";
import QrScanDetailsConfirm from "@/src/components/scanner/QrScanDetailsConfirm";
import { ServerCommonResponse } from "@/src/models/response/ServerResponse";
import VisitorService from "@/src/services/visitorService";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";


export const metadata: Metadata = {
  title: "Confirm Scan Details",
};

export default async function QrScanDetailsPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {

  const token = (await searchParams).token;
  const lat = (await searchParams).lat;
  const lng = (await searchParams).lng;
  let location = '';
  if (!token || !lat || !lng) {
    redirect('/scanner');
  }
  const services = new VisitorService();
  try {
    const response = await services.getScannedQrDetails(token);
    var requestOptions = {
      method: 'GET',
    };
    const locRespone = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=71078b4e084d4ca7a16d4c0900dd4861`, requestOptions);
    if (locRespone.ok) {
      const data = await locRespone.json();
      location = data.features[0].properties.formatted;
    }
    return (
      <main>
        <div>
          {/* <ErrorAnimation /> */}
          <AppHeader />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center min-h-screen">
              <div className="login-div mt-[50px] mb-[50px] p-[40px] w-[600px] rounded-[20px] bg-white z-0 shadow-login">
                <div>
                  <Image
                    src="/logo_h_Black.webp"
                    height={100}
                    width={500}
                    alt=""
                    className="max-w-[300px] mx-auto"
                  />
                  <h1 className="text-[24px] text-center font-semibold mt-6 text-green-600">
                    Confirm Scan Details
                  </h1>
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
