"use client";
import Link from "next/link";
import Image from "next/image";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineMedium,
} from "react-icons/ai";
import { FaTelegramPlane, FaPinterest, FaRegEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function AppFooter() {

   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer>
        <div className="py-11 tab:py-5  bg-[linear-gradient(90deg,_#000_8%,_#092336_51%)] relative">
          <div onClick={scrollToTop} className="absolute right-10 bottom-10 cursor-pointer  p-3  z-[99999] rounded-full bg-white">
            <FaArrowUp/>
          </div>
          <div className="">
            <div className="container mx-auto grid grid-cols-3 tab:flex flex-col justify-center gap-6">
              <div>
                <Link href={'/dashboard'}>
                <Image
                  className="tab:mx-auto max-w-[200px] tab:max-w-[150px]"
                  src="/Logo_h_White.webp"
                  alt=""
                  width="250"
                  height="100"
                  style={{ height: "100%", maxWidth: "300px", marginRight: "" }}
                />
                </Link>
              </div>
              <div className="my-auto text-center flex justify-center">
                <ul className="text-white flex medium:flex-wrap medium:justify-center items-center gap-2 tab:flex-col">
                  <li className="border-e border-e-[#fff] tab:border-none pe-2 text-[14px] medium:text-[14px] lg:text-[16px] tab:pe-0">
                    <Link
                      className="link"
                      href={"/dashboard"}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className="text-[14px] medium:text-[14px] lg:text-[16px]">
                    <Link
                      className="link"
                      href={"/timesheet-overview"}
                    >
                      Timesheets
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-end tab:justify-center tab:flex-col">
                <div className="border-e-[2px] border-e-[#fff] tab:border-none pe-4 tab:mb-5">
                  <Image
                    className="medium:max-w-[80px]"
                    src="/footer-img.svg"
                    alt=""
                    width={100}
                    height={100}
                    style={{ height: "100%" }}
                  ></Image>
                </div>
                <div className="flex space-x-2 medium:space-x-1 ms-3">
                  <Link
                    href="https://www.twitter.com/VeriDocGlobal"
                    target="_blank"
                  >
                    <FaXTwitter className="text-white text-[26px] medium:text-[16px] link" />
                  </Link>
                  <Link href="https://www.t.me/veridocglobal" target="_blank">
                    <FaTelegramPlane className="text-white text-[26px] medium:text-[16px] link" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/VeriDocGlobal"
                    target="_blank"
                  >
                    <AiFillFacebook className="text-white text-[26px] medium:text-[16px] link" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/veridocglobal"
                    target="_blank"
                  >
                    <AiFillLinkedin className="text-white text-[26px] medium:text-[16px] link" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/VeriDocGlobal/"
                    target="_blank"
                  >
                    <AiOutlineInstagram className="text-white text-[26px] medium:text-[16px] link" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/channel/UCbl5uvM3vd-XRm-aDj2YZJw"
                    target="_blank"
                  >
                    <AiFillYoutube className="text-white text-[26px] medium:text-[16px] link" />
                  </Link>
                  <Link
                    href="https://www.pinterest.com.au/veridocglobal/"
                    target="_blank"
                  >
                    <FaPinterest className="text-white text-[26px] medium:text-[16px] link" />
                  </Link>
                  <Link
                    href="https://www.medium.com/veridocglobal"
                    target="_blank"
                  >
                    <AiOutlineMedium className="text-white text-[26px] medium:text-[16px] link" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-black">
          <div className="container mx-auto">
            <div className="md:grid grid-cols-3 gap-10 tab:flex flex-col justify-center tab:gap-5  text-white  py-[10px]">
              <div className="my-auto tab:text-center">
                <p className="uppercase text-[12px] my-auto">
                  © copyright | all rights reserved,&nbsp;
                  <Link
                    className="text-white no-underline"
                    target="_blank"
                    href="https://veridocglobal.com/"
                  >
                    VeriDoc Global
                  </Link>
                </p>
              </div>
              <div className="flex items-center justify-center medium:flex-col">
                <p className="text-[14px] medium:text-[14px] whitespace-nowrap">
                  Have a question?
                </p>
                <div className="flex items-center">
                  <span className="mx-2">
                    <FaRegEnvelope />
                  </span>
                  <Link
                    className="link text-[14px] medium:text-[14px] "
                    href="mailto:admin@veridoccheckin.com"
                  >
                    admin@veridoccheckin.com
                  </Link>
                </div>
              </div>
              <div className="text-end  my-auto tab:text-center">
                <p className="from-[#00843F] to-[#9AC341] bg-gradient-to-r text-[14px] medium:text-[14px] bg-clip-text text-transparent">
                  Making Verification Simple for Everyone
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
