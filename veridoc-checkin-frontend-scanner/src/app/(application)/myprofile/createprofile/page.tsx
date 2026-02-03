import Image from "next/image";
import ErrorAnimation from "@/src/components/animations/ErrorAnimation";


import { Metadata } from "next";
import AddProfileForm from "@/src/components/createprofile/Createprofile";

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

            <div className="login-div p-10 w-full rounded-[20px] z-0">

              <div>

                {/* Logo */}
                <Image
                  src="/logo_h_Black.webp"
                  height={100}
                  width={500}
                  alt=""
                  className="max-w-[300px] mx-auto"
                />
                <AddProfileForm />

              </div>

            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
