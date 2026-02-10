import AppHeader from "@/src/components/common/Header";
import ContactForm from "@/src/components/contactus/Contactus";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function MyProfileDetails() {
  return (
    <main>
      <div>
        {/* <ErrorAnimation /> */}
        <AppHeader />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center min-h-screen">
            <div className="login-div lg:p-[40px] xs:p-[20px] w-full rounded-[20px] z-0">
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
