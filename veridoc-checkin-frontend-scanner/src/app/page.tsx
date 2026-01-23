import Image from "next/image";
import ErrorAnimation from "../components/animations/ErrorAnimation";
import LoginForm from "../components/Authentication/LogInForm";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Login',
}

export default function LoginPage() {
  return <>
    <main className="">
      <div>
        <ErrorAnimation />
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <div className="login-div p-[40px] w-[600] rounded-[20px] bg-white z-0 shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]">
              <div className="login-form">
                <div className="login-title">
                  <Image
                    src='/logo_h_Black.webp'
                    height={100}
                    width={500}
                    alt=""
                    className="max-w-[300px] mx-auto"
                  />
                  <h1 className="text-[28px] text-center font-semibold mb-5 mt-5">
                    First time here?
                  </h1>
                  <p className="text-center text-[16px] mb-1">Proceed to logging your event and you will have an</p>
                  <p className="text-center text-[16px] mb-3"> opportunity to create an account at the end if does not already exist for you.</p>
                </div>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
}