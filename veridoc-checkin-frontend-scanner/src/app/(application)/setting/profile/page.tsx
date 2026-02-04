import Image from "next/image";
import ErrorAnimation from "@/src/components/animations/ErrorAnimation";
import { Metadata } from "next";
import MyProfileDetailsForm from "@/src/components/settings/MyProfileDetailsForm";
import VisitorService from "@/src/services/visitorService";
import AppHeader from "@/src/components/common/Header";

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
                                    <h1 className="text-[24px] text-center font-semibold mt-6 mb-5 text-green-600">
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
