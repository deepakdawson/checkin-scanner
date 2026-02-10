import ErrorAnimation from "@/src/components/animations/ErrorAnimation";
import CreateNewAliasProfileForm from "@/src/components/settings/CreateNewAliasProfileForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Profile",
};

export default function MyProfileDetails() {
    return (
        <main>
            <div>
                <ErrorAnimation />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center">
                        <div className="login-div mt-[50px] mb-[50px] w-full rounded-[20px] z-0">
                            <div>
                                <CreateNewAliasProfileForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
