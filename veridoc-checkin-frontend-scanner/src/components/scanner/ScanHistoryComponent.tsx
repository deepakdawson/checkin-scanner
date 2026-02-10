"use client";

import {
    Button,
    Card,
    CardContent,
    SearchField,
    Separator
} from "@heroui/react";
import { BsFiletypeSvg } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import {
    FiGrid,
    FiUsers
} from "react-icons/fi";
import { GoClock } from "react-icons/go";
import { useSession } from "next-auth/react";
import type { PaginatorResponse } from "@/src/models/visitor/scannerModels";
import VisitorService from "@/src/services/visitorService";
import { AppAlert } from "../common/AppAlert";



export default function ScanHistoryComponent({ scanHistory, apiUrl, userId }: { scanHistory: PaginatorResponse, apiUrl?: string, userId?: string }) {

    const {data,status} = useSession();

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
        if(status == 'authenticated'){
            const service = new VisitorService();
            const response = await service.exportCsvFile(apiUrl ?? '', data.user.accessToken, userId).catch(e => {
                AppAlert.error(e.message);
            });

            if(response) {
                const d = new Blob([response], { type: 'text/csv'});
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


    return ( 
        <div className="w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
                <h2 className="text-[22px] font-semibold text-[var(--accent)]">
                    Scan History
                </h2>
                <div className="flex gap-3">
                    <div className="relative">
                        <SearchField aria-label="search bar" aria-describedby="search bar">
                            <SearchField.Group>
                                <SearchField.SearchIcon />
                                <SearchField.Input placeholder="Search"/>
                                <SearchField.ClearButton />
                            </SearchField.Group>
                        </SearchField>
                    </div>
                    <Button onClick={onClickExportToCsv}>
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
                                Test Org Sayan
                            </p>
                            <div className="flex items-center gap-3 text-sm">
                                <div className="w-[20px]">
                                <GoClock className="text-[var(--accent)]" size={20}/>
                                </div>
                                <p>Check In at: {formatDate(history.checkInDate)}</p>
                                <p>Check Out at: {formatDate(history.checkOutDate)}</p>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <div className="w-[20px]">
                                <CiLocationOn className="text-[var(--accent)]" size={22}/>
                                </div>
                                {/* <CiLocationOn className="text-[var(--accent)]" size={25}/> */}
                                {history.scanLocation}
                            </div>
                            {/* <div className="flex items-center gap-3 text-sm break-all">
                                <FiGrid className="text-[var(--accent)]" />
                                
                            </div> */}
                            <div className="flex items-center gap-3 text-sm">
                                <div className="w-[20px]">
                                <FiUsers className="text-[var(--accent)]" size={20}/>
                                </div>
                                
                                {history.visitorName}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
