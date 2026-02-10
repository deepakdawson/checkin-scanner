import Image from "next/image";
import ErrorAnimation from "@/src/components/animations/ErrorAnimation";
import ScanHistoryComponent from "@/src/components/scanner/ScanHistoryComponent";
import { Metadata } from "next";
import VisitorService from "@/src/services/visitorService";
import decodeToken from "@/src/config/helpers/jwtHelper";
import { getServerSession } from "next-auth";
import authOptions from "@/src/app/api/auth/[...nextauth]/options";
import AppHeader from "@/src/components/common/Header";

export const metadata: Metadata = {
  title: "Scan History",
};

export default async function MyProfileDetails() {

  const session = await getServerSession(authOptions);

  const service = new VisitorService();
  const response = await service.getScanHistory();
  const payload = decodeToken(session?.user.accessToken);
  return (
    <main>
      <div>
        {/* <ErrorAnimation /> */}
        <AppHeader />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center min-h-screen">
            <div className="login-div mt-[50px] mb-[50px] w-full rounded-[20px] z-0">
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
