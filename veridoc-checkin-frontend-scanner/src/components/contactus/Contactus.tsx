"use client";

import { Card, CardContent, Button } from "@heroui/react";

export default function ContactUs() {
  return (
    <div className="w-full px-4">

      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-[32px] font-semibold">Contact Us</h2>
        <p className="text-gray-500 mt-2">
          Feel free to contact us? submit your queries here and we will get back
          to you as soon as possible.
        </p>
      </div>

      {/* Form Card */}
      <Card className="max-w-[1000px] mx-auto rounded-2xl shadow-sm">

        <CardContent className="p-10 space-y-6">

          {/* Names */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              placeholder="First Name"
              className="w-full border border-gray-200 rounded-[5px] px-4 py-3 outline-none focus:border-[#24984e]"
            />

            <input
              placeholder="Last Name"
              className="w-full border border-gray-200 rounded-[5px] px-4 py-3 outline-none focus:border-[#24984e]"
            />
          </div>

          {/* Email / Phone */}
          <div className="grid md:grid-cols-1 gap-6">
            <input
              placeholder="Email"
              className="w-full border border-gray-200 rounded-[5px] px-4 py-3 outline-none focus:border-[#24984e]"
            />
          </div>

          {/* Message */}
          <textarea
            rows={5}
            placeholder="Write Message..."
            className="w-full border border-gray-200 rounded-[5px] px-4 py-3 outline-none focus:border-[#24984e] resize-none"
          />

          {/* Button */}
          <Button className="bg-[#24984e] text-white w-full rounded-[5px] py-3">
            Send Message
          </Button>

        </CardContent>
      </Card>

      {/* Bottom Info */}
      <div className="max-w-[1000px] mx-auto grid md:grid-cols-3 gap-6 mt-10">

        <Card className="rounded-xl">
          <CardContent className="p-5 flex gap-4">
            <span className="text-[#24984e]">📍</span>
            <div>
              <p className="font-medium">Address</p>
              <p className="text-sm text-gray-500">
                789 Oak Lane, Lakeside, TX 54321
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl">
          <CardContent className="p-5 flex gap-4">
            <span className="text-[#24984e]">📞</span>
            <div>
              <p className="font-medium">Contact</p>
              <p className="text-sm text-gray-500">470-601-1911</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl">
          <CardContent className="p-5 flex gap-4">
            <span className="text-[#24984e]">✉</span>
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-gray-500">pagedone1234@gmail.com</p>
            </div>
          </CardContent>
        </Card>

      </div>

    </div>
  );
}
