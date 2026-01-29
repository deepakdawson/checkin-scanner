import ErrorAnimation from "@/src/components/animations/ErrorAnimation"
import GuestAccountForm from "@/src/components/Authentication/GuestAccountForm"
import Image from "next/image"
import { redirect } from "next/navigation";

export default async function createGuestAccountPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {

    const token = (await searchParams).token;
    if(!token){
        redirect('/');
    }

    return <>
        <main className="">
            <div>
                <ErrorAnimation />
                <div className="container mx-auto">
                    <div className="flex items-center justify-center h-screen">
                        <div className="p-[40px] w-[600px] rounded-[20px] bg-white z-0 shadow-login">
                            <div className="login-form">
                                <div className="login-title">
                                    <Image
                                        src='/logo_h_Black.webp'
                                        height={100}
                                        width={500}
                                        alt="Veridoc Checki"
                                        className="max-w-[300px] mx-auto"
                                    />
                                    <h1 className="text-[28px] text-center font-semibold mt-5 pb-[20px]">
                                        Enter details to Log Event
                                    </h1>
                                </div>
                                <GuestAccountForm token={token}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
}