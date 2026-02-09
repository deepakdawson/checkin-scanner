import Image from "next/image";
import ErrorAnimation from "@/src/components/animations/ErrorAnimation";
import ScanHistoryComponent from "@/src/components/scanner/ScanHistoryComponent";
import { Metadata } from "next";
import VisitorService from "@/src/services/visitorService";

export const metadata: Metadata = {
  title: "Scan History",
};

export default async function MyProfileDetails() {

  const service = new VisitorService();
  const response = await service.getScanHistory();



  return (
    <main>
      <div>
        <ErrorAnimation />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center min-h-screen">
            <div className="login-div lg:p-[40px] xs:p-[20px] w-full rounded-[20px] z-0">
              <div>
                
                <ScanHistoryComponent scanHistory={response}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
