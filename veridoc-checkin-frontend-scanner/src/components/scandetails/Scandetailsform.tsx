"use client";

import { Button } from "@heroui/react";
import { Clock, MapPin, QrCode } from "lucide-react";

export default function ConfirmScanForm() {

  return (
    <div className="mt-6">

      <p className="text-center font-medium">
        asdasdas123 (Test Org Sayan)
      </p>

      <div className="mt-6 space-y-4 text-sm text-gray-600">

        <div className="flex items-center gap-2">
          <Clock size={16} className="text-green-600" />
          06:46 PM, 30/01/2026
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-green-600" />
          test addresssdaas
        </div>

        <div className="flex items-center gap-2 break-all">
          <QrCode size={16} className="text-green-600" />
          f02012bb-3e02-4174-a1df-b7ef322a86fa
        </div>

      </div>

      <p className="text-center text-gray-500 text-sm mt-6">
        Select all of the profiles venue.
      </p>

      <div className="mt-4 border-2 border-green-600 rounded-xl p-4 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <input
            type="checkbox"
            defaultChecked
            className="accent-green-600 w-5 h-5"
          />

          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold">
            pra
          </div>

          <span className="text-sm font-medium">
            prasanta majumder
          </span>

        </div>

        <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
          You
        </span>

      </div>

      <Button className="w-full mt-8 bg-green-600 text-white h-12 rounded-xl">
        Submit
      </Button>

    </div>
  );
}
