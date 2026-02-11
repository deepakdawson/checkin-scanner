"use client";
import type { PaginatorResponse, ScannerHistoryResponse } from "@/src/models/visitor/scannerModels";
import VisitorService from "@/src/services/visitorService";
import {
    Button,
    Card,
    CardContent,
    Link,
    SearchField,
    Separator
} from "@heroui/react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { BsChevronLeft, BsChevronRight, BsFiletypeSvg } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import {
    FiUsers
} from "react-icons/fi";
import { GoClock } from "react-icons/go";
import { AppAlert } from "../common/AppAlert";

export default function ScanHistoryComponent({ scanHistory, apiUrl, userId }: { scanHistory: PaginatorResponse, apiUrl?: string, userId?: string }) {

    const allData: PaginatorResponse ={
        pageNumber: 0,
        pageSize: 5,
        pageCount: 100,
        hasNextPage: true,
        hasPreviousPage: false,
        items: [
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a528233f1sdfgc",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a528233f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a52asdfasdf8sdfg233f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a528sdf233f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-esdfg3a528233f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3sq3a528233f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a51245sdf28233f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a528sdfg233f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a528asdfasdfasf2345b2345233f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a528xcvb233f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a52q2v8233f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a5282vqw33f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a52823yu3f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a52823hj4ys3f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a528sdgf233f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a52wqert8233f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a528sdffg233f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a5282q43v33f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a5282q2v33f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a528qw45v233f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a528245fg233f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a52823q234svr3f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a528v234233f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a52823v3q24v53f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a5282vwerv3433f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a5282324v4333f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a528233345v5f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a528233sdvbsdff1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a5282sdvs5r33f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a52823q45dsfg33f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a528233f34545v1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a528231v553f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a52wegg8233f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
            {
                visitorId: "4983cfb9-5259-4956-a017-e3a5282sdg34533f1c",
                visitorName: "Deepak Dawson 1",
                checkInDate:"2026-02-10T06:53:37.2215808Z",
                checkOutDate: "2026-02-10T07:08:42.8967032Z",
                ip: "::1",
                scanLocation: "NALA, Agra - 282002, UP, India",
                organizationName: 'veridoc'
            },
        ]
    }


    const { data, status } = useSession();
    const [currentPage, setCurrentPage] = useState(1);

    const formatDate = (value: string) => {
        const date = new Date(value);
        return date.toLocaleString('hi-IN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
    }

    const onClickExportToCsv = async () => {
        if (status == 'authenticated') {
            const service = new VisitorService();
            const response = await service.exportCsvFile(apiUrl ?? '', data.user.accessToken, userId).catch(e => {
                AppAlert.error(e.message);
            });

            if (response) {
                const d = new Blob([response], { type: 'text/csv' });
                const url = window.URL.createObjectURL(d);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `scan_history_${Date.now()}.csv`);
                document.body.appendChild(link);
                link.click();

                link.parentNode?.removeChild(link);
                window.URL.revokeObjectURL(url);
            }
        }
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            // Add your page change logic here
        }
    }

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
        // Add your page change logic here
        console.log(scanHistory);
    }

    const paginate = () => {
        console.log(Array(scanHistory.pageCount));
        return Array(scanHistory.pageCount)
    }


    return (
        <div className="w-full min-h-[80vh] flex flex-col">
            <div className="flex-1">
                <div className="flex flex-col md:flex-row xs:flex-col justify-between items-start sm:items-center mb-4 gap-3">
                    <h2 className="text-[32px] font-semibold text-[var(--accent)] md:w-auto xs:w-full md:text-left xs:text-center">
                        Scan History
                    </h2>
                    <div className="flex gap-3 md:flex-row xs:flex-col md:w-auto xs:w-full">
                        <div className="relative">
                            <SearchField aria-label="search bar" aria-describedby="search bar" className="xs:w-full">
                                <SearchField.Group>
                                    <SearchField.SearchIcon />
                                    <SearchField.Input placeholder="Search" />
                                    <SearchField.ClearButton />
                                </SearchField.Group>
                            </SearchField>
                        </div>
                        <Button
                            onClick={onClickExportToCsv}
                            className="xs:w-full md:w-auto"
                        >
                            <BsFiletypeSvg /> Export As CSV
                        </Button>
                    </div>
                </div>

                <Separator className="mb-6" />

                <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {scanHistory.items.map((history) => (
                        <Card
                            key={history.visitorId}
                        >
                            <CardContent className="space-y-3">
                                <p className="text-center font-semibold text-[#24984e]">
                                    {history.organizationName}
                                </p>
                                <div className="flex items-center gap-3 text-sm">
                                    <div className="w-[20px]">
                                        <GoClock className="text-[var(--accent)]" size={20} />
                                    </div>
                                    <p>Check In at: {formatDate(history.checkInDate)}</p>
                                    <p>Check Out at: {formatDate(history.checkOutDate)}</p>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <div className="w-[20px]">
                                        <CiLocationOn className="text-[var(--accent)]" size={22} />
                                    </div>
                                    {history.scanLocation}
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <div className="w-[20px]">
                                        <FiUsers className="text-[var(--accent)]" size={20} />
                                    </div>
                                    {history.visitorName}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Pagination - Positioned at the bottom */}
            <div className="mt-auto pt-8">
                <div className="flex items-center justify-center gap-4">
                     <Button
                        isIconOnly
                        onClick={handlePreviousPage}
                        isDisabled={!scanHistory.hasPreviousPage}
                        className={`flex items-center justify-center w-10 h-10 ${!scanHistory.hasPreviousPage
                                ? ' text-gray-300 cursor-not-allowed'
                                : 'text-[var(--accent)]'
                            } transition-all duration-200`}
                        aria-label="Previous page"
                    >
                        <BsChevronLeft size={18} />
                    </Button>

                    <div className="flex items-center gap-2">
                       {
                        !scanHistory.hasNextPage && Array(scanHistory.pageCount).fill(0).map((x,i) => (
                            <Link href={'scan-history?page=' + i} key={i} className='pagination-link'>{i + 1}</Link>
                        ))
                       }
                    </div>

                    <Button isIconOnly
                        onClick={handleNextPage}
                        className="flex items-center justify-center w-10 h-10 text-[var(--accent)] transition-all duration-200"
                        aria-label="Next page"
                        isDisabled={!scanHistory.hasNextPage}
                    >
                        <BsChevronRight size={18} />
                    </Button>
                </div>
            </div>
        </div>
    );
}
