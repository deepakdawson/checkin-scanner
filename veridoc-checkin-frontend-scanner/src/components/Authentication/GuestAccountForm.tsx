'use client'
import { countries, CustomOption } from "@/src/models/data/countries";
import { Avatar, AvatarFallback, AvatarImage, Button, Description, Form, Input, Label, TextArea, TextField } from "@heroui/react";
import { FormEvent, useMemo, useState } from "react";
import Select from "react-select";
import AuthService from "@/src/services/authService";
import guestAccountCreateSchema from "@/src/validation/GuestAccountCreateSchema";
import { AppAlert } from "../common/AppAlert";


function GuestAccountForm({ token }: { token: string }) {

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
        
    }

    const handleFormSubmitOnInvlaid = (event: FormEvent<HTMLFormElement>) => {
        console.log(event)
    }

    return <>
        <Form onSubmit={handleFormSubmit} onInvalid={handleFormSubmitOnInvlaid}>
            {/* FULL NAME INPUT */}
            <div className="mb-[10px]">
                <TextField isRequired fullWidth name="firsName">
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
                            height: "50px",
                            borderRadius: "5px",
                            boxShadow: "none",
                            borderWidth: phoneSubmitError || isPhoneFocused ? 1 : 1,
                            borderColor: phoneSubmitError
                                ? "red"
                                : isPhoneFocused
                                    ? "#24984e"
                                    : "#ced4da",
                            backgroundColor: "white", // always white background
                        }),
                        valueContainer: (provided) => ({ ...provided, height: "50px" }),
                        indicatorsContainer: (provided) => ({ ...provided, height: "50px" }),
                        placeholder: (provided) => ({
                            ...provided,
                            color: "#B3B3B3",
                        }),
                        option: (provided, state) => ({
                            ...provided,
                            backgroundColor:
                                state.isFocused || state.isSelected ? "#24984e" : "white",
                            color: state.isFocused || state.isSelected ? "white" : "black",
                            cursor: "pointer",
                        }),
                    }}
                />
            </div>

            {/* phone number input*/}
            <div className="mb-[20px]">
                <TextField isRequired fullWidth name="phoneNumber">
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
                    aria-label="Detailed notes"
                    placeholder="Address"
                    rows={3}
                    style={{ resize: "vertical" }}
                />
            </div>

            <Button
                type="submit"
                fullWidth
            >
                Submit and Create my profile
            </Button>
        </Form>

    </>
}

export default GuestAccountForm;