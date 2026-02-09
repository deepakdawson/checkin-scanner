import Image from "next/image";
import ErrorAnimation from "@/src/components/animations/ErrorAnimation";
import { Metadata } from "next";
import AllProfilesList from "@/src/components/settings/AllProfilesList";

export const metadata: Metadata = {
    title: "My Profile",
};

export default function MyProfileDetails() {
    return (
        <main>
            <div>
                <ErrorAnimation />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center min-h-screen">
                        <div className="login-div lg:p-[40px] xs:p-[20px] w-full rounded-[20px] z-0">
                            <div>
                                
                                <AllProfilesList />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
