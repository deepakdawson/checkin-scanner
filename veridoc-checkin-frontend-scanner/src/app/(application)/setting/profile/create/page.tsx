import ErrorAnimation from "@/src/components/animations/ErrorAnimation";
import AppFooter from "@/src/components/common/Footer";
import AppHeader from "@/src/components/common/Header";
import CreateNewAliasProfileForm from "@/src/components/settings/CreateNewAliasProfileForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Profile",
};

export default function MyProfileDetails() {
    return (
        <main>
            <div>
                <AppHeader />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex min-h-screen">
                        <div className="login-div mt-[50px] mb-[50px] w-full rounded-[20px] z-0">
                            <div>
                                <CreateNewAliasProfileForm />
                            </div>
                        </div>
                    </div>
                </div>
                <AppFooter/>
            </div>
        </main>
    );
}
