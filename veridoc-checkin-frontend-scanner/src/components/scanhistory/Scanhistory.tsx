"use client";

import {
  Button,
  Card,
  CardContent,
  Chip
} from "@heroui/react";

import {
  FiClock,
  FiMapPin,
  FiGrid,
  FiUsers,
  FiSearch,
} from "react-icons/fi";

export default function ProfilehistoryForm() {
  const profiles = [
    { id: 1, name: "prasanta majumder", email: "prasanta@yourflow.com.au", phone: "+9179806***87", address: "24" },
    { id: 2, name: "prasanta majumder", email: "prasanta@yourflow.com.au", phone: "+9179806***87", address: "24" },
    { id: 3, name: "prasanta majumder", email: "prasanta@yourflow.com.au", phone: "+9179806***87", address: "24" },
  ];

  return (
    <div className="w-full">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
        <h2 className="text-[22px] font-semibold text-[#24984e]">
          Scan History
        </h2>

        <div className="flex gap-3">
          <div className="relative">
            <FiSearch className="absolute left-3 top-4 text-gray-400" />
            <input
              placeholder="Type to search..."
              className="border rounded px-9 h-[50px] outline-none"
            />
          </div>

          <Button className="bg-[#24984e] text-white w-[200px]">
            Export As CSV
          </Button>
        </div>
      </div>

      <hr className="mb-6" />

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {profiles.map((profile) => (
          <Card
            key={profile.id}
            className="rounded-lg shadow-[0_0_0.25em_rgba(67,71,85,0.15),0_0.25em_1em_rgba(90,125,188,0.05)]"
          >

            <CardContent className="p-5 space-y-3">

              {/* Org */}
              <p className="text-center font-semibold text-[#24984e]">
                Test Org Sayan
              </p>

              {/* Time */}
              <div className="flex items-center gap-3 text-sm">
                <FiClock className="text-[#24984e]" />
                04:03 PM, 12/01/2026
              </div>

              {/* Address */}
              <div className="flex items-center gap-3 text-sm">
                <FiMapPin className="text-[#24984e]" />
                {profile.address}
              </div>

              {/* Scan ID */}
              <div className="flex items-center gap-3 text-sm break-all">
                <FiGrid className="text-[#24984e]" />
                f02012bb-3e02-4174-a1df-b7ef322a86fa
              </div>

              {/* User */}
              <div className="flex items-center gap-3 text-sm">
                <FiUsers className="text-[#24984e]" />
                {profile.name}
              </div>

            </CardContent>
          </Card>
        ))}

      </div>
    </div>
  );
}
