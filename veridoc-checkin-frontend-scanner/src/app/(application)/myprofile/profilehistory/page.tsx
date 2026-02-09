import Image from "next/image";
import ErrorAnimation from "@/src/components/animations/ErrorAnimation";


import { Metadata } from "next";
import ProfilehistoryForm from "@/src/components/profilehistory/Profilehistory";

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

                {/* Logo */}
                <Image
                  src="/logo_h_Black.webp"
                  height={100}
                  width={500}
                  alt=""
                  className="max-w-[300px] mx-auto"
                />

                {/* Title */}
                {/* <h1 className="text-[24px] text-center font-semibold mt-6 mb-5 text-green-600">
                  My Profile
                </h1> */}

                {/* FORM COMPONENT */}
                <ProfilehistoryForm />

              </div>

            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
