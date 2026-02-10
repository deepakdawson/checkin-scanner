'use client'
import AppMessages from "@/src/config/AppMessages";
import type { OtpGenerateRequestModel, OtpModalInputProps } from "@/src/models/auth/userAuthModels";
import { countries, CustomOption } from "@/src/models/data/countries";
import AuthService from "@/src/services/authService";
import { Avatar, AvatarFallback, AvatarImage, Button, Form, Input, InputGroup, TextField } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import Select from "react-select";
import { AppAlert } from "../common/AppAlert";
import InputOtpModal from "../common/auth/InputOtpModal";
import Loader from "../common/Loader";

function LoginForm() {

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

    const searchParams = useSearchParams();
    const router = useRouter();


    const [userLoginType, setUserLogInType] = useState<string>('email');
    const [selectedCountry, setSelectedCountry] = useState<any>(options.find(x => x.code === 'AU'));
    const [showOtpModal, setShowOtpModal] = useState<boolean>(false);
    const [isPhoneFocused, setIsPhoneFocused] = useState(false);
    const [phoneSubmitError, setPhoneSubmitError] = useState(false);
    const [showLoader, setShowLoader] = useState<boolean>(false);
    const [inputOtpModalParam, setInputOtpModalParam] = useState<OtpModalInputProps>({} as OtpModalInputProps);


    // form values
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPhoneNumber, setUserPhoneNumber] = useState<string>('');

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
    const onClickContinueAsGuest = () => {
        const token = searchParams.get('token') ?? '';
        router.push(`/guest?token=${token}`);
    }
    const handlePhoneNumberChange = (value: string) => {
         if (regex.test(value)) {
            setUserPhoneNumber(value);
        }
    }

    const onSubmitError = () =>{
        AppAlert.error(AppMessages.Validation.email);
    }

    const handleContinueButtonClick = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (userLoginType === 'email') {
            if (userEmail.length > 0) {
                const requestBody: OtpGenerateRequestModel = {
                    email: userEmail,
                    phoneCodeISO: '',
                    phoneNumber: '',
                    isEmailLogin: true
                }
                setShowLoader(true);
                const service = new AuthService();
                const response = await service.generateOtpForUserAccount(requestBody).catch(err => {
                    setShowLoader(false);
                    AppAlert.error(err.message);
                });
                setShowLoader(false);
                if (response) {
                    const otpInput: OtpModalInputProps = {
                        phoneNumber: userPhoneNumber,
                        phoneCode: selectedCountry?.dial_code ??'',
                        visitorId: response.visitorId,
                        phoneIsoCode: selectedCountry?.code ?? '',
                        email: userEmail,
                        isEmailLogin: userLoginType === 'email'
                    }
                    setInputOtpModalParam(otpInput);
                    setShowOtpModal(true);
                }
            }
        } else if(userLoginType === 'phone'){
            if (userEmail.length > 0) {
                const requestBody: OtpGenerateRequestModel = {
                    email: '',
                    phoneCodeISO: selectedCountry.code,
                    phoneNumber: userPhoneNumber,
                    isEmailLogin: false
                }
                setShowLoader(true);
                const service = new AuthService();
                const response = await service.generateOtpForUserAccount(requestBody).catch(err => {
                    setShowLoader(false);
                    AppAlert.error(err.message);
                });
                setShowLoader(false);
                if (response) {
                    const otpInput: OtpModalInputProps = {
                        phoneNumber: userPhoneNumber,
                        phoneCode: selectedCountry?.dial_code ??'',
                        visitorId: response.visitorId,
                        phoneIsoCode: selectedCountry?.code ?? '',
                        email: userEmail,
                        isEmailLogin: false
                    }
                    setInputOtpModalParam(otpInput);
                    setShowOtpModal(true);
                }
            }
        }
    }

    return <>
        {/* user login form */}
        { showLoader && <Loader loaderVisible='block' loadingText="Loading" /> }
        <Form className="w-full flex flex-col gap-6 mb-2 relative" onSubmit={handleContinueButtonClick} onInvalid={onSubmitError}>
            <Button type="button" fullWidth onClick={onClickContinueAsGuest}>Continue as a Guest</Button>
            <hr className="border-t border-gray-300" />
            <div className="flex items-center justify-between relative z-20 md:flex-row xs:flex-col">
                <h1 className="text-[28px] font-semibold md:mb-0 xs:mb-3">Returning here?</h1>
                <div className="flex border rounded overflow-hidden bg-white relative z-30">
                    <div
                        onClick={() => setUserLogInType("email")}
                        className={`px-4 py-1 text-[14px] cursor-pointer z-40 ${userLoginType === "email"
                            ? "bg-[var(--accent)] text-white"
                            : "bg-white text-black"
                            }`}
                    >
                        Email
                    </div>
                    <div
                        onClick={() => setUserLogInType("phone")}
                        className={`px-4 py-1 text-[14px] cursor-pointer z-40 ${userLoginType === "phone"
                            ? "bg-[var(--accent)] text-white"
                            : "bg-white text-black"
                            }`}>
                        Phone
                    </div>
                </div>
            </div>

            {userLoginType === 'email' && (
                <TextField fullWidth isRequired name="email" aria-label="user email" aria-labelledby="user email" value={userEmail} onChange={setUserEmail}>
                    <InputGroup fullWidth>
                        <InputGroup.Prefix>
                            <Avatar size="sm">
                                <AvatarImage src='/mail.svg' className="w-[25px] h-[25px] object-contain relative"></AvatarImage>
                            </Avatar>
                        </InputGroup.Prefix>
                        <InputGroup.Input placeholder="Email" />
                    </InputGroup>
                </TextField>
            )}

            {userLoginType === 'phone' && (
               <div className="grid grid-cols-2 gap-4 xs:flex xs:flex-col md:grid">
                    <Select
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

                    <TextField aria-label="phone number" aria-labelledby="phone number" name="phoneNumber" value={userPhoneNumber} onChange={setUserPhoneNumber}>
                        <Input type="text" placeholder="Phone Number" />
                    </TextField>

                </div>
            )}

            <Button type="submit" variant="primary" fullWidth>Continue</Button>
        </Form>

        {showOtpModal && <InputOtpModal isOpen={showOtpModal} setIsOpen={setShowOtpModal} params={inputOtpModalParam} setLoaderVisibility={setShowLoader} />}
    </>
}

export default LoginForm;