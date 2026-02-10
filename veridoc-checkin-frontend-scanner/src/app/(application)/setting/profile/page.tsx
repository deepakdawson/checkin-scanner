import AppHeader from "@/src/components/common/Header";
import MyProfileDetailsForm from "@/src/components/settings/MyProfileDetailsForm";
import VisitorService from "@/src/services/visitorService";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Profile",
};

export default async function MyProfilePage() {
    const service = new VisitorService();
    const response = await service.getUserProfile();
    return (
        <>
        <AppHeader />
            <main>
                <div>
                    {/* <ErrorAnimation /> */}
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-center min-h-screen">
                            <div className="login-div md:w-[600px] xs:w-full xl:p-[40px] xs:p-[20px] rounded-[20px] bg-white z-0 shadow-login">
                                <div>
                                    <h1 className="text-[24px] text-center font-semibold mb-5 text-green-600">
                                        My Profile
                                    </h1>
                                    <MyProfileDetailsForm userData={response} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
