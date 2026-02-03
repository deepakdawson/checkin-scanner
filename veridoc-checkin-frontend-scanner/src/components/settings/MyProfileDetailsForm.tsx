"use client";
import { countries, CustomOption } from "@/src/models/data/countries";
import { useEffect, useMemo, useState } from "react";
import { VscChevronRight } from "react-icons/vsc";
import { Avatar, AvatarFallback, AvatarImage, Button, Description, Form, Input, Label, Separator, TextArea, TextField } from "@heroui/react";
import Select from "react-select";
import VisitorService from "@/src/services/visitorService";


export default function MyProfileDetailsForm() {
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


    const [selectedCountry, setSelectedCountry] = useState<any>(options.find(x => x.code === 'AU'));
    const [isPhoneFocused, setIsPhoneFocused] = useState(false);
    const [phoneSubmitError, setPhoneSubmitError] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState<string>('');

    useEffect(() => {
        const service = new VisitorService();
        service.getUserProfile().then();
    }, []);



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
    const phoneNumberChangeEvent = (event: string) => {
        if (regex.test(event)) {
            setPhoneNumber(event);
        }
    }




    return (
        <div className="flex items-center justify-center bg-white">
            <Form className="w-full">
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="font-bold text-black">
                            Profile
                        </h2>
                        <Button isIconOnly>
                            <VscChevronRight color="var(--accent)" />
                        </Button>
                    </div>
                    <div>
                        <p className="text-black text-sm">
                            Additional profiles can be added to your account to log a person who doesn't have their own mobile number such as a child or a relative.
                        </p>
                    </div>
                </div>

                <Separator className="mb-3" />

                <div className="mb-3 flex flex-row gap-[16px]">
                    <TextField className='grow' name="firstName" isRequired>
                        <Label htmlFor="userFirstName">First Name</Label>
                        <Input type="text" id="userFirstName" placeholder="First Name" />
                    </TextField>
                    <TextField className='grow' name="lastName">
                        <Label htmlFor="userLastName">Last Name</Label>
                        <Input type="text" id="userLastName" placeholder="Last Name" />
                    </TextField>

                </div>

                <div className="mb-3">
                    <TextField name="email" isReadOnly>
                        <Label htmlFor="userEmail">Email</Label>
                        <Input type="text" id="userEmail" placeholder="Email" />
                    </TextField>
                </div>


                <div className="mb-3">
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


                <div className="mb-3">
                    <TextField isRequired fullWidth name="phoneNumber" maxLength={15} value={phoneNumber} onChange={phoneNumberChangeEvent} isReadOnly>
                        <Label className="font-bold text-base">Phone Number</Label>
                        <div className="mt-[10px]">
                            <Input placeholder="Phone Number" type="text" />
                        </div>
                        <Description>Please enter the phone number without plus sign (+) and country code.</Description>
                    </TextField>
                </div>
                

                <div className="mb-[20px] flex flex-col gap-2">
                    <Label htmlFor="useraddress">Address</Label>
                    <TextArea
                        id="useraddress"
                        name="address"
                        aria-label="address"
                        placeholder="Address"
                        rows={3}
                        style={{ resize: "vertical" }}
                    />
                </div>
                
                <div className="mb-3 flex gap-[16px] flex-row">
                    <Button className="w-full" variant="danger">Delete Account</Button>
                    <Button className="w-full">Save</Button>
                </div>


            </Form>

        </div>
    );
}