"use client";
import { useDecodeToken } from "@/src/config/helpers/jwtHelper";
import { Button, Separator } from "@heroui/react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaChevronDown, FaSignOutAlt } from "react-icons/fa";
import { MdHistory, MdOutlineQrCodeScanner } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";

export default function AppHeader() {
	const { data, status } = useSession();
	const [toggle, setToggle] = useState(false);
	const [open, setOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const sidebarRef = useRef<HTMLDivElement>(null);

	const router = useRouter();

	const handleDropdown = (state: boolean) => {
		setOpen(!state);
	};

	useEffect(() => {
		const handleClick = (e: any) => {
			if (open && !dropdownRef.current?.contains(e.target as Node)) {
				setOpen(false);
			}
			if (toggle && !sidebarRef.current?.contains(e.target as Node)) {
				setToggle(false);
			}
		};
		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, [open, toggle]);

	const path = usePathname();

	const handleLogout = () => {
		signOut();
		router.push("/");
	};

	return (
		<header>
			<div className="hidden tab:block">
				<div className="container mx-auto">
					<div className="py-3">
						<Image
							src={"/Logo_h_White.webp"}
							height={1076}
							width={200}
							alt=""
							className="max-w-[200px] mx-auto"
						/>
					</div>
				</div>
			</div>
			<nav className="bg-[#f8f9fb] px-0 py-[20px] border-b-[#ededed] border-b border-solid;">
				<div className="container mx-auto">
					<nav className="flex items-center justify-between flex-wrap relative">
						<div className="flex items-center flex-shrink-0 text-white mr-6 tab:hidden">
							<a
								className="inline-block py-[0.3125rem] lg:mr-auto"
								href="/dashboard">
								<Image
									src="/logo_h_Black.webp"
									priority={true}
									alt="Veridoc CheckIn"
									title="logo"
									width={780}
									height={200}
									style={{
										height: "100%",
										maxWidth: "250px",
										marginRight: "",
									}}
								/>
							</a>
						</div>
						{toggle ? (
							<AiOutlineClose
								onClick={() => setToggle(!toggle)}
								className="text-[#9c9c9c] text-2xl md:block lg:hidden"
							/>
						) : (
							<AiOutlineMenu
								onClick={() => setToggle(!toggle)}
								className="text-[#9c9c9c] text-2xl md:block lg:hidden"
							/>
						)}
						<ul className="xs:hidden lg:flex flex list-none flex-row mr-auto font-bold text-base ">
							<li>
								<Link
									href={'/scanner'}
									className={
										path === "/scanner" || path === '/scanner/qr-details'
											? "border-b-3 border-[var(--accent)] text-[var(--accent)] pb-[42px]"
											: "text-black hover:text-[var(--accent)]"
									}
								>
									Scan QR Code
								</Link>
							</li>
							<li className="ml-8">
								<Link
									href="/setting/profile"
									className={
										path === "/setting/profile"
											? "border-b-3 border-[var(--accent)] text-[var(--accent)] pb-[42px]"
											: "text-black hover:text-[var(--accent)]"
									}>
									My Profile
								</Link>
							</li>
							<li className="ml-8">
								<Link
									href="/scanner/scan-history"
									className={
										path === "/scanner/scan-history"
											? "border-b-3 border-[var(--accent)] text-[var(--accent)] pb-[42px]"
											: "text-black hover:text-[var(--accent)]"
									}>
									Scan History
								</Link>
							</li>
							<li className="ml-8">
								<a
									className={
										path === "/contact-us"
											? "border-b-3 border-[var(--accent)] text-[var(--accent)] pb-[42px]"
											: "text-black hover:text-[var(--accent)]"
									}
									href="/contact-us">
									Contact Us
								</a>
							</li>
						</ul>
						<div className="flex items-center flex-shrink-0 xs:hidden lg:flex">
							<div
								className="top-bar-right top-bar-right-account"
								ref={dropdownRef}>
								<ul className="flex list-none m-0 items-center">
									<li className="border-l-1 border-[#ccc] pl-[15px] relative">
										<button
											onClick={() => handleDropdown(open)}
											type="button"
											className="link no-underline w-fit p-[5px] flex items-center gap-3">
											<span className="font-bold text-base">
												{useDecodeToken(data?.user.accessToken)?.unique_name}
											</span>
											<span className="ms-[8px]">
												<FaChevronDown className={`left-[52px] top-[5px] text-lg ${open ? "rotate-180" : ""}`} />
											</span>
										</button>
										{open && (
											<div className={`bg-white  w-[232px] shadow-lg absolute right-[0px] top-14 animate-[growDown_300ms_ease-in-out_forwards] origin-top z-[999]`}>
												<ul className="border-[1px] border-[solid] border-[#e5e5e6]">
													<div className="flex flex-col items-center p-7">
														<span className="font-bold pt-5">{useDecodeToken(data?.user.accessToken)?.unique_name}</span>
														<span className="pt-1 text-[12px]">{useDecodeToken(data?.user.accessToken)?.email}</span>
													</div>
													<Separator />
													<li
														className="cursor-pointer px-3 py-[12px] border-b-[1px] border-[#e5e5e6] p-[5px] drpdown"
														key={1}>
														<Button
															onClick={handleLogout}
															className="bg-transparent h-[30px]">
															<FaSignOutAlt className="text-red-500 text-lg" />
															<span className="text-black">Logout</span>
														</Button>
													</li>
												</ul>
											</div>
										)}
									</li>
								</ul>
							</div>
						</div>
						{/* tabile sidebar */}
						<div
							ref={sidebarRef}
							className={`p-[20px] z-[999]  duration-500 md:hidden tab:block h-screen  gap-8 fixed w-1/2 bg-[#fff]  top-[0px] text-[#000] text-500 font-semibold ${toggle
								? "left-[0] shadow-[200px_0px_300px_350px_rgba(0,0,0,0.3)]"
								: "left-[-100%]"
								}`}>
							<div className="flex justify-between border-b-[1px] border-[#ccc] pb-[20px] mob:gap-2">
								<div className="">
									<div className="text-[#ccc] text-[16px] mob:pt-[20px]">Welcome,</div>
									<span className="font-bold">{useDecodeToken(data?.user.accessToken)?.unique_name}</span>
								</div>
								<AiOutlineClose
									onClick={() => setToggle(!toggle)}
									className="text-[#9c9c9c] text-2xl md:block lg:hidden"
								/>
							</div>
							<ul className="pt-[20px] border-[#ccc] pb-[15px]">
								<li className="py-3 text-[#777777] text-[15px]">
									<a
										className={
											path === "/scanner" || path === '/scanner/qr-details'
												? "flex items-center text-[var(--accent)]"
												: "flex items-center hover:text-[var(--accent)]"
										}
										href="/setting/profile">
										<span className="me-[15px] text-[18px]">
											<MdOutlineQrCodeScanner />
										</span>
										Scan QR Code
									</a>
								</li>
								<li className="py-3 text-[#777777] text-[15px]">
									<a
										className={
											path === "/setting/profile"
												? "flex items-center text-[var(--accent)]"
												: "flex items-center hover:text-[var(--accent)]"
										}
										href="/qrlogin">
										<span className="me-[15px] text-[18px]">
											<CgProfile />
										</span>
										Profile
									</a>
								</li>
								<li className="py-3 text-[#777777] text-[15px]">
									<a
										className={
											path === '/scanner/scan-history'
												? "flex items-center text-[var(--accent)]"
												: "flex items-center hover:text-[var(--accent)]"
										}
										href="/scanner/scan-history">
										<span className="me-[15px] text-[18px]">
											<MdHistory />
										</span>
										Scan History
									</a>
								</li>
							</ul>
							<ul className=" border-b border-[#ccc] py-[25px] absolute bottom-0">
								<li>
									<a
										className="flex items-center"
										onClick={handleLogout}
										href="#">
										<VscSignOut className="text-[var(--accent)] me-[15px] text-[18px]" />
										<span className="text-[#777777] text-[15px] font-semibold">
											Sign Out
										</span>
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</nav>
		</header>
	)
}
