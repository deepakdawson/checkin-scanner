"use client";

import {
  Button,
  Card,
  CardContent,
  Chip
} from "@heroui/react";

import {
  FiEye,
  FiMail,
  FiMapPin,
  FiPhone,
  FiPlus,
  FiUser,
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
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[22px] font-semibold text-[#24984e]">
          Current Profiles
        </h2>

        <Button className="bg-[#24984e] max-w-[200px] text-white flex items-center gap-2">
          <FiPlus size={18} />
          Create Profile
        </Button>
      </div>

      <hr className="mb-6" />

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {profiles.map((profile) => (
          <Card
            key={profile.id}
            className="rounded-lg shadow-[0_0_0.25em_rgba(67,71,85,0.27),0_0.25em_1em_rgba(90,125,188,0.05)]"
          >

            <CardContent className="p-5 space-y-3">

              {/* Header Row */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">

                  {/* Avatar with User Icon */}
                  {/* <Avatar size="sm">
                    
                  </Avatar> */}

                  {/* Name + You */}
                  <FiUser className="text-[#24984e]" />
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{profile.name}</p>

                    <Chip size="sm" variant="soft" className="text-[#24984e]">
                      You
                    </Chip>
                  </div>

                </div>

                <FiEye className="text-gray-400 cursor-pointer" />
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <FiMail className="text-[#24984e]" />
                <p>{profile.email}</p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <FiPhone className="text-[#24984e]" />
                <p>{profile.phone}</p>
              </div>

              {/* Address */}
              <div className="flex items-center gap-3">
                <FiMapPin className="text-[#24984e]" />
                <p>{profile.address}</p>
              </div>

            </CardContent>
          </Card>
        ))}

      </div>
    </div>
  );
}
