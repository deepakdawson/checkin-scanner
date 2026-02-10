"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Form,
  TextField,
  InputGroup,
} from "@heroui/react";

export default function CreateNewAliasProfileForm() {
  const [isDefaultAddress, setIsDefaultAddress] = useState(true);

  return (
    <div className="w-full">

      <h2 className="text-[24px] font-semibold text-[var(--accent)] mb-3">
        Add Profile
      </h2>

      <hr className="mb-6" />

      <Card className="rounded-lg">
        <CardContent className="">
          <Form className="flex flex-col md:gap-6 xs:gap-3">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <label className="md:w-[250px] font-medium">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="flex-1">
                <TextField fullWidth>
                  <InputGroup fullWidth>
                    <InputGroup.Input placeholder="Full Name" />
                  </InputGroup>
                </TextField>
              </div>
            </div>

            {/* Relation */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <label className="md:w-[250px] font-medium">
                How are you related to the main profile? <span className="text-red-500">*</span>
              </label>

              <div className="flex-1">
                <TextField fullWidth>
                  <InputGroup fullWidth>
                    <InputGroup.Input placeholder="Your Relation" />
                  </InputGroup>
                </TextField>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <label className="md:w-[250px] font-medium">Phone</label>

              <div className="flex-1">
                <TextField fullWidth>
                  <InputGroup fullWidth>
                    <InputGroup.Input placeholder="+917980653787" />
                  </InputGroup>
                </TextField>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <label className="md:w-[250px] font-medium">Email</label>

              <div className="flex-1">
                <TextField fullWidth>
                  <InputGroup fullWidth>
                    <InputGroup.Input placeholder="xyz@example.com" />
                  </InputGroup>
                </TextField>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-6">
              <label className="md:w-[250px] font-medium">
                Address <span className="text-red-500">*</span>
              </label>

              <div className="flex-1">

                {/* Default toggle */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={isDefaultAddress}
                    onChange={(e) => setIsDefaultAddress(e.target.checked)}
                    className="accent-[#24984e]"
                  />
                  <span>Default Address</span>
                </div>

                {!isDefaultAddress && (
                  <textarea
                    placeholder="Enter your Address"
                    rows={4}
                    className="w-full border rounded-lg p-3 outline-none focus:border-[#24984e]"
                  />
                )}  

              </div>
            </div>

          </Form>

        </CardContent>
      </Card>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">

        <Button className="bg-[#24984e] text-white w-full sm:max-w-[200px] xs:max-w-full">
          Save
        </Button>

        <Button className="bg-[#24984e] text-white w-full sm:max-w-[200px] xs:max-w-full">
          Cancel
        </Button>

      </div>

    </div>
  );
}
