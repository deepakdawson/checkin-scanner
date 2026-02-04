"use client";
import { Avatar, Separator, } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaChevronDown, FaHome, FaSignOutAlt } from "react-icons/fa";
import { FaSheetPlastic, FaUserGear, FaUsers } from "react-icons/fa6";
import { MdOutlineQrCode, MdSettings } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";

export default function AppHeader() {

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
		router.push("/");
	};

	const Menu = [
		{
			name: "Settings",
			path: "/setting/profile",
		},
		{ name: "Sign Out", path: "/login", onClick: handleLogout },
	];

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
								className="text-[#9c9c9c] text-2xl md:hidden tab:block"
							/>
						) : (
							<AiOutlineMenu
								onClick={() => setToggle(!toggle)}
								className="text-[#9c9c9c] text-2xl md:hidden tab:block"
							/>
						)}
						<span className="left-14 absolute text-black text-[18px] font-bold hidden mob:block tab:block">
							
						</span>
						<ul className="tab:hidden flex list-none flex-row mr-auto font-bold text-base">
							<li>
								<Link
									href="/scanner"
									className={
										path === "/scanner"
											? "border-b-3 border-[#24984E] text-[#24984E] pb-[42px]"
											: "text-black hover:text-[#24984E]"
									}>
									Scan QR Code
								</Link>
							</li>
							<li className="ml-8">
								<Link
									href="/setting/profile"
									className={
										path === "/setting/profile"
											? "border-b-3 border-[#24984E] text-[#24984E] pb-[42px]"
											: "text-black hover:text-[#24984E]"
									}>
									My Profile
								</Link>
							</li>
							<li className="ml-8">
								<Link
									href="/qrlogin"
									className={
										path === "/qrlogin"
											? "border-b-3 border-[#24984E] text-[#24984E] pb-[42px]"
											: "text-black hover:text-[#24984E]"
									}>
									Scan History
								</Link>
							</li>
							<li className="ml-8">
								<a
									className={
										path === "/contactus"
											? "border-b-3 border-[#24984E] text-[#24984E] pb-[42px]"
											: "text-black hover:text-[#24984E]"
									}
									href="/contactus">
									Contact Us
								</a>
							</li>
						</ul>
						<div className="flex items-center flex-shrink-0 tab:hidden">
							<div
								className="top-bar-right top-bar-right-account"
								ref={dropdownRef}>
								<ul className="flex list-none m-0 items-center">
									<li className="border-l-1 border-[#ccc] pl-[15px] relative">
										<button
											onClick={() => handleDropdown(open)}
											type="button"
											className="link w-fit p-[5px] flex items-center gap-3">
											<span className="font-bold">
												Deepak
											</span>
											<span className="ms-[8px]">
												<FaChevronDown 	className={`left-[52px] top-[5px] text-lg ${open ? "rotate-180" : "" }`}
												/>
											</span>
										</button>
										{open && (
											<div className={`bg-white  w-[232px] shadow-lg absolute right-[0px] top-14 animate-[growDown_300ms_ease-in-out_forwards] origin-top z-[999]`}>
												<ul className="border-[1px] border-[solid] border-[#e5e5e6]">
													<div className="flex flex-col items-center p-7">
														<span className="font-bold pt-5">Deepak</span>
														{/* <span className="pt-1">{userEmail}</span> */}
														<span className="pt-1 text-[12px]">
															deepak@adf.com
														</span>
													</div>
													<Separator />
													{Menu.map((menu) => (
														<li
															className=" cursor-pointer px-3 py-[12px] border-b-[1px] border-[#e5e5e6] p-[5px] drpdown"
															key={menu.name}>
															{menu.onClick ? (
																<button
																	onClick={menu.onClick}
																	className="flex items-center gap-2">
																	<FaSignOutAlt className="text-[#666] text-lg" />
																	{menu.name}
																</button>
															) : (
																<a
																	href={menu.path}
																	className="flex items-center gap-2">
																	<MdSettings className="text-[#666] text-lg" />
																	{menu.name}
																</a>
															)}
														</li>
													))}
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
									<span className="font-bold">deepak</span>
								</div>

								<AiOutlineClose
									onClick={() => setToggle(!toggle)}
									className="text-[#9c9c9c] text-2xl md:hidden tab:block"
								/>
							</div>
							<ul className="pt-[20px] border-[#ccc] pb-[15px]">
								<li className="py-3 text-[#777777] text-[15px]">
									<a
										className={
											path === "/dashboard" ||
												path === "/masteradmin/master-admin-dashboard"
												? "flex items-center text-[#24984E]"
												: "flex items-center hover:text-[#24984E]"
										}
										href="/dashboard">
										<span className="me-[15px] text-[18px]">
											<FaHome />
										</span>
										Dashboard
									</a>
								</li>
								<li className="py-3 text-[#777777] text-[15px]">
									<a
										className={
											path === "/timesheet-overview"
												? "flex items-center text-[#24984E]"
												: "flex items-center hover:text-[#24984E]"
										}
										href={"/timesheet-overview"}>
										<span className="me-[15px] text-[18px]">
											<FaSheetPlastic />
										</span>
										Timesheets
									</a>
								</li>
								<li className="py-3 text-[#777777] text-[15px]">
									<a
										className={
											path === "/setting/profile" ||
												path === "/masteradmin/master-admin-myaccount"
												? "flex items-center text-[#24984E]"
												: "flex items-center hover:text-[#24984E]"
										}
										href="/setting/profile">
										<span className="me-[15px] text-[18px]">
											<FaUserGear />
										</span>
										Settings
									</a>
								</li>
								<li className="py-3 text-[#777777] text-[15px]">
									<a
										className={
											path === "/qrlogin" ||
												path === "/qrlogin"
												? "flex items-center text-[#24984E]"
												: "flex items-center hover:text-[#24984E]"
										}
										href="/qrlogin">
										<span className="me-[15px] text-[18px]">
											<MdOutlineQrCode />
										</span>
										Generate QR Code
									</a>
								</li>
								<li className="py-3 text-[#777777] text-[15px]">
									<a
										className={
											path === "/integrations" ||
												path === "/integrations"
												? "flex items-center text-[#24984E]"
												: "flex items-center hover:text-[#24984E]"
										}
										href="/integrations">
										<span className="me-[15px] text-[18px]">
											<FaUserGear />
										</span>
										Integrations
									</a>
								</li>
							</ul>
							<ul className=" border-b border-[#ccc] py-[25px] absolute bottom-0">
								<li>
									<a
										className="flex items-center"
										onClick={handleLogout}
										href="#">
										<VscSignOut className="text-[#24984E] me-[15px] text-[18px]" />
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
