import authOptions from "@/src/app/api/auth/[...nextauth]/options";
import AppFooter from "@/src/components/common/Footer";
import AppHeader from "@/src/components/common/Header";
import ScanHistoryComponent from "@/src/components/scanner/ScanHistoryComponent";
import VisitorService from "@/src/services/visitorService";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Scan History",
};

export default async function MyProfileDetails({searchParams}: {searchParams: Promise<{[key:string]: string|undefined}>}) {

  const pageNumber = (await searchParams).page;

  const service = new VisitorService();
  const response = await service.getScanHistory(pageNumber);
  return (
    <Suspense>
      <main>
        <div>
          <AppHeader />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex min-h-screen">
              <div className="login-div mt-[50px] mb-[50px] w-full rounded-[20px] z-0">
                <div>
                  <ScanHistoryComponent scanHistory={response} />
                </div>
              </div>
            </div>
          </div>
          <AppFooter/>
        </div>
      </main>
    </Suspense>
  );
}
