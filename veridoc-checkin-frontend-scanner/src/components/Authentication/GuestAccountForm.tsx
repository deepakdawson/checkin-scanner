'use client'
import type { OtpModalInputProps } from "@/src/models/auth/userAuthModels";
import { userCreateModel } from "@/src/models/auth/userAuthModels";
import { countries, CustomOption } from "@/src/models/data/countries";
import AuthService from "@/src/services/authService";
import { Avatar, AvatarFallback, AvatarImage, Button, Description, Form, Input, Label, TextArea, TextField } from "@heroui/react";
import { FormEvent, useMemo, useState } from "react";
import Select from "react-select";
import { AppAlert } from "../common/AppAlert";
import Loader from "../common/Loader";
import InputOtpModal from "../common/auth/InputOtpModal";


function GuestAccountForm({ token }: { token: string }) {

    const regex = /^\d*$/;
    // counties option
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

    const [selectedCountry, setSelectedCountry] = useState<any>(options.find(x => x.code === 'AU'));
    const [isPhoneFocused, setIsPhoneFocused] = useState(false);
    const [phoneSubmitError, setPhoneSubmitError] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [showOtpModal, setShowOtpModal] = useState<boolean>(false);
    const [loaderVisibility, setLoaderVisibility] = useState<string>('hidden');
    const [loaderCount, setLoaderCount] = useState<number>(0);
    const [inputOtpModalParam, setInputOtpModalParam] = useState<OtpModalInputProps>({} as OtpModalInputProps);

    // page handlers
    const handleCountryChange = (event: any) => {
        console.log(event);
        setSelectedCountry(event);
    };

    const customFilter = (option: CustomOption, searchText: string) => {
        return (
            option.data.name.toLowerCase().includes(searchText.toLowerCase()) ||
            option.data.dial_code.toLowerCase().includes(searchText.toLowerCase())
        );
    };

    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const fd = new FormData(event.currentTarget);
        const data = Object.fromEntries(fd.entries());
        data.phoneCodeISO = selectedCountry.code;

        const body = data as userCreateModel;
        body.token = token

        setLoaderVisibility('block');
        setLoaderCount(0);

        const service = new AuthService();
        const response = await service.createUserAccount(body).catch(error => {
            setLoaderVisibility('hidden');
            AppAlert.error(error.message);
        });
        setLoaderVisibility('hidden');
        if (response) {
            const otpInput: OtpModalInputProps = {
                phoneNumber: body.phoneNumber,
                phoneCode: selectedCountry.dial_code,
                visitorId: response.visitorId,
                phoneIsoCode: body.phoneCodeISO,
                email: undefined,
                isEmailLogin: undefined
            }
            setInputOtpModalParam(otpInput);
            setShowOtpModal(true);
        }
    }

    const handleFormSubmitOnInvlaid = (event: FormEvent<HTMLFormElement>) => {
        AppAlert.error('Please enter all required fileds');
    }

    const phoneNumberChangeEvent = (event: string) => {
        if (regex.test(event)) {
            setPhoneNumber(event);
        }
    }

    return <>
        <Loader loaderVisible={loaderVisibility} />
        <Form onSubmit={handleFormSubmit} onInvalid={handleFormSubmitOnInvlaid}>
            {/* FULL NAME INPUT */}
            <div className="mb-[10px]">
                <TextField isRequired fullWidth name="firstName">
                    <Label className="font-bold text-base">First Name</Label>
                    <div className="mt-[10px]">
                        <Input placeholder="Full Name" type="text" />
                    </div>
                </TextField>
                <TextField fullWidth name="lastName">
                    <Label className="font-bold text-base">Last Name</Label>
                    <div className="mt-[10px]">
                        <Input placeholder="Full Name" type="text" />
                    </div>
                </TextField>
            </div>

            {/* FULL NAME INPUT */}
            <div className="mb-[20px]">
                <TextField isRequired fullWidth name="email">
                    <Label className="font-bold text-base">Email</Label>
                    <div className="mt-[10px]">
                        <Input placeholder="Email" type="email" />
                    </div>
                </TextField>
            </div>

            {/* country list */}
            <div className="mb-[10px]">
                <Select
                    name="phoneCodeISO"
                    instanceId={"country_code_login"}
                    isSearchable
                    value={selectedCountry}
                    options={options}
                    filterOption={customFilter}
                    placeholder="Select country"
                    onChange={handleCountryChange}
                    onFocus={() => setIsPhoneFocused(true)}
                    onBlur={() => setIsPhoneFocused(false)}
                    styles={{
                        control: (provided) => ({
                                ...provided,
                                height: "var(--input-container-height)",
                                borderRadius: "var(--input-border-radius)",
                                boxShadow: "none",
                                borderWidth: phoneSubmitError || isPhoneFocused ? 1 : 1,
                                borderColor: phoneSubmitError
                                    ? "red"
                                    : isPhoneFocused
                                        ? "var(--accent)"
                                        : "var(--border)",
                                backgroundColor: "white", // always white background
                            }),
                            valueContainer: (provided) => ({ ...provided, height: "var(--input-container-height)" }),
                            indicatorsContainer: (provided) => ({ ...provided, height: "var(--input-container-height)" }),
                            placeholder: (provided) => ({
                                ...provided,
                                color: "var(--field-placeholder)",
                            }),
                            option: (provided, state) => ({
                                ...provided,
                                backgroundColor:
                                    state.isFocused || state.isSelected ? "var(--accent)" : "white",
                                color: state.isFocused || state.isSelected ? "white" : "black",
                                cursor: "pointer",
                            }),
                    }}
                />
            </div>

            {/* phone number input*/}
            <div className="mb-[20px]">
                <TextField isRequired fullWidth name="phoneNumber" value={phoneNumber} onChange={phoneNumberChangeEvent} maxLength={15}>
                    <Label className="font-bold text-base">Phone Number</Label>
                    <div className="mt-[10px]">
                        <Input placeholder="Phone Number" type="text" />
                    </div>
                    <Description>Please enter the phone number without plus sign (+) and country code.</Description>
                </TextField>
            </div>

            {/* address input*/}
            <div className="mb-[20px] flex flex-col gap-2">
                <Label htmlFor="useraddress" className="font-bold text-base">Address</Label>
                <TextArea
                    id="useraddress"
                    name="address"
                    aria-label="Address"
                    placeholder="Address"
                    rows={3}
                    style={{ resize: "vertical" }}
                />
            </div>

            <Button
                type="submit"
                fullWidth
            >
                Submit and create my profile
            </Button>
        </Form>

        {/* otp modal */}
       <InputOtpModal isOpen={showOtpModal} setIsOpen={setShowOtpModal} params={inputOtpModalParam} setLoaderVisibility={setLoaderVisibility}/>

    </>
}

export default GuestAccountForm;