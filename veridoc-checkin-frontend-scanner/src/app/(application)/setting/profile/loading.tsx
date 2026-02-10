import AppHeader from "@/src/components/common/Header";
import { Skeleton } from "@heroui/react";
import Image from "next/image";
export default function Loading() {
  return (
    <>
      <AppHeader />
      <main>
        <div>
          {/* <ErrorAnimation /> */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center min-h-screen">
              <div className="login-div mt-[50px] mb-[50px] p-[40px] w-[600px] rounded-[20px] bg-white z-0 shadow-login">
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
                  <div className="shadow-panel w-full space-y-5 rounded-lg bg-transparent p-4">
                    <Skeleton className="h-[50px] rounded-lg" />
                    <Skeleton className="h-[50px] w-full rounded-lg" />
                      <Skeleton className="h-[50px] w-full rounded-lg" />
                      <Skeleton className="h-[50px] w-full rounded-lg" />
                      <Skeleton className="h-[50px] w-full rounded-lg" />
                      <Skeleton className="h-[50px] w-full rounded-lg" />
                      <Skeleton className="h-[50px] w-full rounded-lg" />
                      <Skeleton className="h-[50px] w-full rounded-lg" />
                      <Skeleton className="h-[50px] w-full rounded-lg" />
                      <Skeleton className="h-[50px] w-full rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}