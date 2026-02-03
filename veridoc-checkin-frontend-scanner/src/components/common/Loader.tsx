"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
interface LoaderProps {
    loadingText?: string;
    loaderVisible: string;
    loaderNumberCount: number
}

const Loader: React.FC<LoaderProps> = ({ loadingText = "Loading", loaderVisible = "hidden", loaderNumberCount = 0 }) => {
    const customStyles = {
        boxShadow: "0 0 0 1000px rgba(255, 255, 255, 0.25)",
        height: "100%",
        width: "100%",
    };
    const [count, setCount] = useState(100);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                const newCount = prevCount < 100 ? prevCount + 1 : 100;
                if (newCount === 100) {
                    clearInterval(interval);
                }
                return newCount;
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);

    const [dots, setDots] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prevDots) => (prevDots < 3 ? prevDots + 1 : 0));
        }, 600);

        return () => clearInterval(interval);
    }, []);

    const renderDots = () => {
        return Array.from({ length: 3 }, (_, index) => (
            <span key={index} style={{ opacity: index < dots ? 1 : 0 }}>
                .
            </span>
        ));
    };
    return (
        <>
            <div className={`overflow-hidden ${loaderVisible}`}>
                <div
                    className="fixed top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%] flex flex-col items-center justify-center z-30 p-[25px] !w-ful h-full bg-[#ffffffe3]"
                    style={customStyles}
                >
                    <div className="relative">
                        <Image
                            className="mx-auto"
                            src="/loader.svg"
                            alt="logo"
                            width={250}
                            height={250}
                        />
                        <div className="w-[180px] h-[180px] rounded-[50%] absolute top-[16px] left-[51.7%] -translate-x-2/4 flex items-center justify-center flex-col transform bg-white text-[26px]">
                            <span>{count}%</span>
                            <div className="relative w-fit mx-auto text-xl font-medium">
                                <h4 className="text-[26px]">
                                    <span>{loadingText}</span>
                                    <span className="absolute top-0"> {renderDots()}</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[-65px] text-center w-full">
                        <Image
                            className="mx-auto"
                            src="/logo_h_Black.webp"
                            alt="logo"
                            width={200}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Loader;
