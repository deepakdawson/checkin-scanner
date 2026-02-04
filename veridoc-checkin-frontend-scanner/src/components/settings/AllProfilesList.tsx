"use client";

import {
  Button,
  Card,
  CardContent,
  Chip,
  Separator
} from "@heroui/react";

import {
  FiEye,
  FiMail,
  FiMapPin,
  FiPhone,
  FiPlus,
  FiUser,
} from "react-icons/fi";
import { useRouter } from "next/navigation";




export default function AllProfilesList() {

  const router = useRouter();

  const onCreateButtonClick = () => {
    router.push('/setting/profile/create');
  }

  const profiles = [
    { id: 1, name: "prasanta majumder", email: "prasanta@yourflow.com.au", phone: "+9179806***87", address: "24" },
    { id: 2, name: "prasanta majumder", email: "prasanta@yourflow.com.au", phone: "+9179806***87", address: "24" },
    { id: 3, name: "prasanta majumder", email: "prasanta@yourflow.com.au", phone: "+9179806***87", address: "24" },
  ];

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[22px] font-semibold text-[#24984e]">
          Current Profiles
        </h2>
        <Button onClick={onCreateButtonClick}>
          <FiPlus size={18} />
          Create Profile
        </Button>
      </div>

      <Separator className="mb-6" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile) => (
          <Card
            key={profile.id}
          >
            <CardContent className="p-5 space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <FiUser className="text-[var(--accent)]" />
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{profile.name}</p>
                    <Chip size="sm" variant="soft">
                      You
                    </Chip>
                  </div>
                </div>
                <FiEye className="text-gray-400 cursor-pointer" />
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="text-[var(--accent)]" />
                <p>{profile.email}</p>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="text-[var(--accent)]" />
                <p>{profile.phone}</p>
              </div>
              <div className="flex items-center gap-3">
                <FiMapPin className="text-[var(--accent)]" />
                <p>{profile.address}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
