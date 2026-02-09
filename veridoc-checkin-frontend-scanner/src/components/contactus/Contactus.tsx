"use client";

import { countries, CustomOption } from "@/src/models/data/countries";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
  Form,
  Input,
  InputGroup,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { useMemo, useState } from "react";
import Select from "react-select";

export default function ContactUs() {
  const regex = /^\d*$/;

  const options = useMemo(() => {
    return countries.map((country) => ({
      ...country,
      label: (
        <div className="flex items-center gap-2">
          <Avatar size="sm">
            <AvatarImage src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`} />
            <AvatarFallback>{country.code}</AvatarFallback>
          </Avatar>
          {`${country.name} (${country.dial_code})`}
        </div>
      ),
      value: country.dial_code,
    }));
  }, []);

  const [selectedCountry, setSelectedCountry] = useState<any>(
    options.find(x => x.code === "AU")
  );
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);

  const handleCountryChange = (event:any) => setSelectedCountry(event);

  const customFilter = (option: CustomOption, searchText: string) =>
    option.data.name.toLowerCase().includes(searchText.toLowerCase()) ||
    option.data.dial_code.toLowerCase().includes(searchText.toLowerCase());

  const handlePhoneChange = (val:string) => {
    if(regex.test(val)) setPhoneNumber(val);
  };

  return (
    <div className="w-full">

      {/* Title */}
      <div className="text-center mb-10">
        
      </div>

      {/* Form Card */}
      <Card className="max-w-[1000px] mx-auto rounded-2xl shadow-login">
        <h2 className="text-[32px] font-semibold text-center text-[#25984e]">Contact Us</h2>
        <p className="text-[#000] mt-2 text-center mb-5">
          Feel free to contact us? submit your queries here and we will get back
          to you as soon as possible.
        </p>
        <CardContent className="">

          <Form className="space-y-3">

            {/* Names */}
            <div className="grid md:grid-cols-2 gap-3">

              <TextField>
                <Label>First Name</Label>
                <Input placeholder="First Name" />
              </TextField>

              <TextField>
                <Label>Last Name</Label>
                <Input placeholder="Last Name" />
              </TextField>

            </div>

            {/* Email */}
            <TextField>
              <Label>Email</Label>
              <InputGroup fullWidth>
                <InputGroup.Input placeholder="Email" />
              </InputGroup>
            </TextField>

            

            {/* Message */}
            <TextField>
              <Label>Message</Label>
              <TextArea placeholder="Write Message..." rows={4} />
            </TextField>

            {/* Submit */}
            <Button className="bg-[#24984e] text-white w-full rounded-[5px] py-3 mt-[10px]">
              Send Message
            </Button>

          </Form>

        </CardContent>
      </Card>

      {/* Bottom Info */}
      <div className="max-w-[1000px] mx-auto grid md:grid-cols-3 gap-6 mt-10">

        <Card className="shadow-login rounded-[20px]">
          <CardContent className="flex gap-4">
            <FiMapPin className="text-[#24984e]" size={22}/>
            <div>
              <p className="font-medium">Address</p>
              <p className="text-sm text-gray-500">
                789 Oak Lane, Lakeside, TX 54321
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-login rounded-[20px]">
          <CardContent className="flex gap-4">
            <FiPhone className="text-[#24984e]" size={22}/>
            <div>
              <p className="font-medium">Contact</p>
              <p className="text-sm text-gray-500">470-601-1911</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-login rounded-[20px]">
          <CardContent className="flex gap-4">
            <FiMail className="text-[#24984e]" size={22}/>
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-gray-500">
                pagedone1234@gmail.com
              </p>
            </div>
          </CardContent>
        </Card>

      </div>

    </div>
  );
}
