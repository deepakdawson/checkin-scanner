'use client'
import { countries, CustomOption } from "@/src/models/data/countries";
import { Avatar, AvatarFallback, AvatarImage, Button, Form, Input, InputGroup, InputOTP, Modal, TextField, useFilter } from "@heroui/react";
import { useMemo, useState } from "react";
import Select from "react-select";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";


function LoginForm() {

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
    const [selectedCountry, setSelectedCountry] = useState<any>(null);
    const [showOtpModal, setShowOtpModal] = useState<boolean>(false);
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
    const onClickContinueAsGuest = () => {
        const token = searchParams.get('token') ?? '';
        router.push(`/guest?token=${token}`);
    }

    return <>
        {/* user login form */}
        <Form className="w-full flex flex-col gap-6 mb-2 relative">
            <Button type="button" fullWidth onClick={onClickContinueAsGuest}>Continue as a Guest</Button>
            <hr className="border-t border-gray-300" />
            <div className="flex items-center justify-between relative z-20">
                <h1 className="text-[28px] mt-6 font-semibold">Returning here?</h1>
                <div className="flex border rounded overflow-hidden bg-white relative z-30">
                    <div
                        onClick={() => setUserLogInType("email")}
                        className={`px-4 py-1 text-[14px] cursor-pointer z-40 ${userLoginType === "email"
                            ? "bg-[#24984d] text-white"
                            : "bg-white text-black"
                            }`}
                    >
                        Email
                    </div>
                    <div
                        onClick={() => setUserLogInType("phone")}
                        className={`px-4 py-1 text-[14px] cursor-pointer z-40 ${userLoginType === "phone"
                            ? "bg-[#24984d] text-white"
                            : "bg-white text-black"
                            }`}>
                        Phone
                    </div>
                </div>
            </div>

            {userLoginType === 'email' && (
                <TextField fullWidth name="email" aria-label="user email" aria-labelledby="user email">
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
                <div className="grid grid-cols-2 gap-4">
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

                    <TextField aria-label="phone number" aria-labelledby="phone number">
                        <Input type="text" placeholder="Phone Number" />
                    </TextField>

                </div>
            )}

            <Button type="button" variant="primary" fullWidth onClick={() => { setShowOtpModal(true) }}>Continue as a Guest</Button>
        </Form>

        {showOtpModal && (
            <Modal isOpen={showOtpModal} onOpenChange={setShowOtpModal}>
                <Modal.Backdrop>
                    <Modal.Container>
                        <Modal.Dialog className="lg:max-w-[460px]">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Heading className="text-2xl text-[var(--accent)] mb-2">Verification</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body>
                                <p className="text-center text-[14px] text-gray-600 mb-1">We have sent you an OTP code via SMS for mobile number verification to:</p>
                                <p className="text-center text-[#24984d] text-base font-semibold mb-3">+917980653787</p>
                                <p className="text-center text-[14px] text-gray-500 mb-4">
                                    Time Remaining: <b className="font-bold">97 seconds</b>
                                </p>
                                <p className="text-center font-medium mb-3">Enter OTP</p>

                                <div className="flex justify-center mb-4">
                                    <InputOTP
                                        aria-describedby='otp_input'
                                        maxLength={6}
                                        name="otpCode"
                                    >
                                        <InputOTP.Group>
                                            <InputOTP.Slot index={0} />
                                            <InputOTP.Slot index={1} />
                                            <InputOTP.Slot index={2} />
                                            <InputOTP.Slot index={3} />
                                            <InputOTP.Slot index={4} />
                                            <InputOTP.Slot index={5} />
                                        </InputOTP.Group>
                                    </InputOTP>
                                </div>

                                <div className="flex justify-center mb-3">
                                    <Button className={'w-40'}>
                                        Confirm
                                    </Button>
                                </div>
                                <div className="flex justify-center text-sm mb-2">
                                    <Button variant="ghost" className="bg-transparent hover:bg-transparent text-blue-600 text-sm h-auto">
                                        Try a different number
                                    </Button>
                                </div>
                                <div className="text-center text-sm">
                                    <Button className="text-[var(--accent)] font-medium bg-transparent hover:bg-transparent h-auto">
                                        Resend OTP
                                    </Button>
                                </div>

                            </Modal.Body>
                            {/* <Modal.Footer>
                                <Button className="w-full" slot="close">
                                    Continue
                                </Button>
                            </Modal.Footer> */}
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        )}

    </>
}

export default LoginForm;