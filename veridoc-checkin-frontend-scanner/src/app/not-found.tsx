"use client";
import ErrorAnimation from "../components/animations/ErrorAnimation";

export default function NotFound() {
  return (
    <>
      <section
        className="veridoc-404-page-block bg-background wp-block-veridoc-veridoc-404-page relative overflow-hidden"
        aria-label="404 Error Page"
        role="main"
      >
        <ErrorAnimation />
        <div className="mx-auto flex items-center justify-center min-h-screen px-4">
          <div className="flex flex-col gap-y-[30px] items-center justify-center text-center text-white w-full max-w-3xl relative z-10">

            <div>
              <h1 className="text-[80px] sm:text-[120px] md:text-[150px] font-bold leading-none font-roboto text-[#25984e]">
                404
              </h1>

              <p className="text-[clamp(21px,5.2vw,25px)] font-roboto leading-tight text-[#25984e]">
                We are sorry,
                <br />
                but the page you requested was not found.
              </p>
            </div>

            <div className="flex gap-6 w-full justify-center flex-wrap font-roboto">
              <a
                href="/"
                className="md:min-w-[150px] xs:min-w-[138px] no-underline capitalize inline-flex items-center justify-center rounded-[5px] px-[clamp(18px,3vw,24px)] py-[clamp(10px,1.8vw,12px)] border transition duration-200 bg-[#0E3553] text-background border-[#0E3553] hover:bg-[#000]"
              >
                Home
              </a>

              <a
                href="/#contact-us"
                className="md:min-w-[150px] xs:min-w-[138px] no-underline capitalize inline-flex items-center justify-center rounded-[5px] px-[clamp(18px,3vw,24px)] py-[clamp(10px,1.8vw,12px)] border transition duration-200 bg-[#0E3553] text-background border-[#0E3553] hover:bg-[#000]"
              >
                Contact
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-[10px]">
              {[
                {
                  href: "https://www.facebook.com/VeriDocGlobal",
                  alt: "Facebook",
                  src: "https://veridocsign.com/wp-content/uploads/2025/09/0ijkdg0u6ertmfdmqe9v.svg",
                },
                {
                  href: "https://twitter.com/VeriDocGlobal",
                  alt: "Twitter",
                  src: "https://veridocsign.com/wp-content/uploads/2025/09/oxsscmon6cfmfdmrez0.svg",
                },
                {
                  href: "https://www.instagram.com/VeriDocGlobal/",
                  alt: "Instagram",
                  src: "https://veridocsign.com/wp-content/uploads/2025/09/4vuvjfysgsemfdmrtp7.svg",
                },
                {
                  href: "https://www.linkedin.com/company/veridocglobal",
                  alt: "LinkedIn",
                  src: "https://veridocsign.com/wp-content/uploads/2025/09/71o3osgdo6dmfdmrleh.svg",
                },

              ].map((item) => (
                <a
                  key={item.alt}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${item.alt}`}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25984e] hover:bg-[#176939] text-[#25984e] duration-200"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-[22px] h-[22px] object-contain"
                    loading="lazy" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section></>

  );
}
