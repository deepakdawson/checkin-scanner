"use client";

import { Button } from "@heroui/react";
import { Clock, MapPin, QrCode } from "lucide-react";
import { QrCodeDetailsConfirmRequest, ScannedQrCodeDetailsResponse } from "@/src/models/visitor/scannerModels";
import VisitorService from "@/src/services/visitorService";
import Loader from "../common/Loader";
import { useState } from "react";
import { AppAlert } from "../common/AppAlert";

export default function QrScanDetailsConfirm({ params, location, token }: { params: ScannedQrCodeDetailsResponse, location: string, token: string }) {

    const localDate = new Date(params.scannedAt);

    const [showLoader, setShowLoader] = useState<boolean>(false);


    const onClickConfirm = async () => {
        const requestBody: QrCodeDetailsConfirmRequest = {
            visitorId: '',
            location: location,
            token: token
        }
        setShowLoader(true);
        const services = new  VisitorService();
        const response = await services.confirmQrCodeDetails(requestBody).catch(e => {
            setShowLoader(false);
            AppAlert.error(e.message);
        });
        setShowLoader(false);
        if(response) {
            AppAlert.success(response.message);
        }
    }


    return (
        <>
            {showLoader && <Loader loadingText="Saving" loaderVisible="block"/>}
            <div className="mt-6">
                <p className="text-center font-medium">
                    {params.userName} ({params.userOrganization})
                </p>
                <div className="mt-6 space-y-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <Clock size={16} className="text-green-600" />
                        {localDate.toLocaleString('en-US', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true,
                        })}
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-green-600" />
                        {location}
                    </div>
                    <div className="flex items-center gap-2 break-all">
                        <QrCode size={16} className="text-green-600" />
                        {params.qrUniqueId}
                    </div>
                </div>
                <div className="mt-4 border-2 border-green-600 rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold">
                            {params.firstName.substring(0, 3)}
                        </div>
                        <span className="text-sm font-medium">
                            {params.firstName} {params.lastName}
                        </span>
                    </div>
                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        You
                    </span>
                </div>
                <Button fullWidth className="mt-8" onClick={onClickConfirm}>
                    Submit
                </Button>
            </div>
        </>
    );
}
