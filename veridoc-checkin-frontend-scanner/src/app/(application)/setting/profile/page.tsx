import AppHeader from "@/src/components/common/Header";
import MyProfileDetailsForm from "@/src/components/settings/MyProfileDetailsForm";
import VisitorService from "@/src/services/visitorService";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "My Profile",
};

export default async function MyProfilePage() {
    const service = new VisitorService();
    const response = await service.getUserProfile();
    return (
        <>
            <AppHeader />
            <Suspense>
                <main>
                    <div>
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-center">
                                <div className="login-div mt-[50px] mb-[50px] xs:w-full rounded-[20px] ">
                                    <div>
                                        <h1 className="text-[32px] md:text-left xs:text-center font-semibold mb-5 text-green-600">
                                            My Profile
                                        </h1>
                                        <hr className="mb-6"></hr>
                                        <MyProfileDetailsForm userData={response} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Suspense>
        </>
    );
}
