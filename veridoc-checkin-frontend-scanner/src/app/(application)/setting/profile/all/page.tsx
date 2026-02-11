import Image from "next/image";
import ErrorAnimation from "@/src/components/animations/ErrorAnimation";
import { Metadata } from "next";
import AllProfilesList from "@/src/components/settings/AllProfilesList";
import AppHeader from "@/src/components/common/Header";
import AppFooter from "@/src/components/common/Footer";

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
                                
                                <AllProfilesList />

                            </div>
                        </div>
                    </div>
                </div>
                <AppFooter/>
            </div>
        </main>
    );
}
