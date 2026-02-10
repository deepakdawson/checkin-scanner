"use client";

import {
  Button,
  Card,
  CardContent,
  Form,
  Input,
  InputGroup,
  Label,
  TextArea,
  TextField
} from "@heroui/react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { AppAlert } from "../common/AppAlert";
import AppMessages from "@/src/config/AppMessages";
import { FormEvent, useRef, useState } from "react";
import { ContactUsRequest } from "@/src/models/visitor/scannerModels";
import VisitorService from "@/src/services/visitorService";
import Loader from "../common/Loader";

export default function ContactUs() {
  const formRef = useRef<HTMLFormElement>(null);
  const [showLoader, setShowLoader] = useState<boolean>(false);

  const handleOnSubmitError = () => {
    AppAlert.error(AppMessages.Validation.mandatory);
  }

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fd = new FormData(event.currentTarget);
    const requestBody: ContactUsRequest = {
      firstName: fd.get('firstName')?.toString() || '',
      lastName: fd.get('lastName')?.toString(),
      email: fd.get('email')?.toString() || '',
      message: fd.get('message')?.toString() || '',
      userId: ''
    };
    setShowLoader(true);
    const service = new VisitorService();
    const response = await service.sendContactUsRequest(requestBody).catch(e => {
      setShowLoader(false);
      AppAlert.error(e.message);
    });
    setShowLoader(false);
    if (response) {
      formRef.current?.reset();
      AppAlert.success(response.message);
    }
  }

  return (
    <>
      {showLoader && <Loader loaderVisible="block" loadingText="Sending" />}
      <Card className="max-w-[1000px] mx-auto rounded-2xl shadow-login">
        <h2 className="text-[32px] font-semibold text-center text-[#25984e]">Contact Us</h2>
        <p className="text-[#000] mt-2 text-center mb-5">
          Feel free to contact us? submit your queries here and we will get back
          to you as soon as possible.
        </p>
        <CardContent className="p-10">
          <Form className="space-y-6" onSubmit={handleOnSubmit} onInvalid={handleOnSubmitError} ref={formRef}>
            <div className="grid md:grid-cols-2 gap-6">
              <TextField isRequired name="firstName">
                <Label>First Name</Label>
                <Input placeholder="First Name" />
              </TextField>
              <TextField name="lastName">
                <Label>Last Name</Label>
                <Input placeholder="Last Name" />
              </TextField>
            </div>
            <TextField isRequired name="email">
              <Label>Email</Label>
              <Input placeholder="Email" />
            </TextField>
            <TextField isRequired name="message">
              <Label>Message</Label>
              <TextArea placeholder="Write Message..." rows={4} />
            </TextField>
            <Button fullWidth className="py-3" type="submit">
              Send Message
            </Button>
          </Form>
        </CardContent>
      </Card>

      <div className="max-w-[1000px] mx-auto grid md:grid-cols-3 gap-6 mt-10">

        <Card className="shadow-login rounded-[20px]">
          <CardContent className="p-5 flex gap-4">
            <FiMapPin className="text-[#24984e]" size={22} />
            <div>
              <p className="font-medium">Address</p>
              <p className="text-sm text-gray-500">
                789 Oak Lane, Lakeside, TX 54321
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-login rounded-[20px]">
          <CardContent className="p-5 flex gap-4">
            <FiPhone className="text-[#24984e]" size={22} />
            <div>
              <p className="font-medium">Contact</p>
              <p className="text-sm text-gray-500">470-601-1911</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-login rounded-[20px]">
          <CardContent className="p-5 flex gap-4">
            <FiMail className="text-[#24984e]" size={22} />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-gray-500">
                pagedone1234@gmail.com
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </>
  );
}
