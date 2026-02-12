// "use client";
// import AppMessages from "@/src/config/AppMessages";
// import { countries, CustomOption } from "@/src/models/data/countries";
// import { VisitorProfileResponse, VisitorProfileUpdateRequest } from "@/src/models/visitor/visitorProfile";
// import VisitorService from "@/src/services/visitorService";
// import { Avatar, AvatarFallback, AvatarImage, Button, Description, Form, Input, Label, Separator, TextArea, TextField } from "@heroui/react";
// import { useRouter } from "next/navigation";
// import { useMemo, useState } from "react";
// import { VscChevronRight } from "react-icons/vsc";
// import Select from "react-select";
// import { AppAlert } from "../common/AppAlert";
// import Loader from "../common/Loader";

// export default function MyProfileDetailsForm({ userData }: { userData: VisitorProfileResponse }) {
//     const regex = /^\d*$/;

//     const router = useRouter();

//     const options = useMemo(() => {
//         return countries.map((country) => ({
//             ...country,
//             label: (
//                 <div className="flex items-center gap-2">
//                     <Avatar size="sm">
//                         <AvatarImage src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`} />
//                         <AvatarFallback>{country.code}</AvatarFallback>
//                     </Avatar>
//                     {`${country.name} (${country.dial_code})`}
//                 </div>
//             ),
//             value: country.dial_code,
//         }));
//     }, []);


//     const [selectedCountry, setSelectedCountry] = useState<any>(options.find(x => x.code === userData.phoneISOCode) || options.find(x => x.code === 'AU'));
//     const [isPhoneFocused, setIsPhoneFocused] = useState(false);
//     const [phoneSubmitError, setPhoneSubmitError] = useState(false);
//     const [showLoader, setShowLoader] = useState<boolean>(false);
//     // form inputs
//     const [firstName, setFirstName] = useState<string>(userData.firstName);
//     const [lastName, setLastName] = useState<string | undefined>(userData.lastName);
//     const [email, setEmail] = useState<string>(userData.email);
//     const [address, setAddress] = useState<string | undefined>(userData.address);
//     const [phoneNumber, setPhoneNumber] = useState<string>(userData.phoneNumber);

//     // page handlers
//     const handleCountryChange = (event: any) => {
//         setSelectedCountry(event);
//     };
//     const customFilter = (option: CustomOption, searchText: string) => {
//         return (
//             option.data.name.toLowerCase().includes(searchText.toLowerCase()) ||
//             option.data.dial_code.toLowerCase().includes(searchText.toLowerCase())
//         );
//     };
//     const phoneNumberChangeEvent = (event: string) => {
//         if (regex.test(event)) {
//             setPhoneNumber(event);
//         }
//     }
//     const addressOnChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//         setAddress(event.currentTarget.value);
//     };

//     const onAllProfileButtonClick = () => {
//         router.push('/setting/profile/all');
//     }

//     const onFormInvalid = () => {
//         AppAlert.error(AppMessages.Validation.mandatory);
//     }

//     const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         const requestBody: VisitorProfileUpdateRequest = {
//             visitorId: userData.visitorId,
//             firstName: firstName,
//             lastName: lastName,
//             address: address
//         }

//         setShowLoader(true);
//         const service = new VisitorService();
//         const response = await service.updateUserProfile(requestBody).catch(e => {
//             setShowLoader(false);
//             AppAlert.error(e.message);
//         });
//         setShowLoader(false);
//         if (response) {
//             AppAlert.success(response.message);
//         }
//     }

//     return (
//         <>
//             {showLoader && <Loader loadingText="Saving" loaderVisible="block" />}
//             <div className="w-full flex items-center justify-center bg-white">
//                 <Form className="w-full" onSubmit={onFormSubmit} onInvalid={onFormInvalid}>
//                     <div className="mb-6">
//                         <div className="flex items-center justify-between mb-2">
//                             <h2 className="font-bold text-black">
//                                 Profile
//                             </h2>
//                             <Button isIconOnly onClick={onAllProfileButtonClick}>
//                                 <VscChevronRight color="var(--accent)" />
//                             </Button>
//                         </div>
//                         <div>
//                             <p className="text-black text-sm">
//                                 Additional profiles can be added to your account to log a person who doesn't have their own mobile number such as a child or a relative.
//                             </p>
//                         </div>
//                     </div>

//                     <Separator className="mb-3" />

//                     <div className="mb-3 flex md:flex-row xs:flex-col md:gap-[16px] xs:gap-[10px]">
//                         <TextField className='grow' name="firstName" isRequired value={firstName} onChange={setFirstName}>
//                             <Label htmlFor="userFirstName">First Name</Label>
//                             <Input type="text" id="userFirstName" placeholder="First Name" />
//                         </TextField>
//                         <TextField className='grow' name="lastName" value={lastName} onChange={setLastName}>
//                             <Label htmlFor="userLastName">Last Name</Label>
//                             <Input type="text" id="userLastName" placeholder="Last Name" />
//                         </TextField>

//                     </div>

//                     <div className="mb-3">
//                         <TextField name="email" isReadOnly value={email}>
//                             <Label htmlFor="userEmail">Email</Label>
//                             <Input type="text" id="userEmail" placeholder="Email" />
//                         </TextField>
//                     </div>


//                     <div className="mb-3">
//                         <div className="mb-[8px]">
//                             <Label>Phone Number</Label>
//                         </div>
//                         <Select
//                             name="phoneCodeISO"
//                             instanceId={"country_code_login"}
//                             isSearchable
//                             value={selectedCountry}
//                             defaultValue={selectedCountry}
//                             options={options}
//                             filterOption={customFilter}
//                             placeholder="Select country"
//                             onChange={handleCountryChange}
//                             onFocus={() => setIsPhoneFocused(true)}
//                             onBlur={() => setIsPhoneFocused(false)}
//                             styles={{
//                                 control: (provided) => ({
//                                     ...provided,
//                                     height: "var(--input-container-height)",
//                                     borderRadius: "var(--input-border-radius)",
//                                     boxShadow: "none",
//                                     borderWidth: phoneSubmitError || isPhoneFocused ? 1 : 1,
//                                     borderColor: phoneSubmitError
//                                         ? "red"
//                                         : isPhoneFocused
//                                             ? "var(--accent)"
//                                             : "var(--border)",
//                                     backgroundColor: "white", // always white background
//                                 }),
//                                 valueContainer: (provided) => ({ ...provided, height: "var(--input-container-height)" }),
//                                 indicatorsContainer: (provided) => ({ ...provided, height: "var(--input-container-height)" }),
//                                 placeholder: (provided) => ({
//                                     ...provided,
//                                     color: "var(--field-placeholder)",
//                                 }),
//                                 option: (provided, state) => ({
//                                     ...provided,
//                                     backgroundColor:
//                                         state.isFocused || state.isSelected ? "var(--accent)" : "white",
//                                     color: state.isFocused || state.isSelected ? "white" : "black",
//                                     cursor: "pointer",
//                                 }),
//                             }}
//                         />
//                     </div>


//                     <div className="mb-3">
//                         <TextField isRequired fullWidth name="phoneNumber" maxLength={15} minLength={9} value={phoneNumber} onChange={phoneNumberChangeEvent} isReadOnly>
//                             <div className="mt-[10px]">
//                                 <Input placeholder="Phone Number" type="text" />
//                             </div>
//                             <Description>Please enter the phone number without plus sign (+) and country code.</Description>
//                         </TextField>
//                     </div>


//                     <div className="mb-[20px] flex flex-col gap-1">
//                         <Label htmlFor="useraddress">Address</Label>
//                         <TextArea
//                             id="useraddress"
//                             name="address"
//                             aria-label="address"
//                             placeholder="Address"
//                             rows={3}
//                             style={{ resize: "vertical" }}
//                             value={address}
//                             onChange={addressOnChangeHandler}
//                         />
//                     </div>

//                     <div className="mb-3 flex gap-[16px] flex-row">
//                         <Button fullWidth variant="danger">Delete Account</Button>
//                         <Button fullWidth type="submit">Save</Button>
//                     </div>
//                 </Form>
//             </div>
//         </>
//     );
// }
"use client";
import AppMessages from "@/src/config/AppMessages";
import { countries, CustomOption } from "@/src/models/data/countries";
import { VisitorProfileResponse, VisitorProfileUpdateRequest } from "@/src/models/visitor/visitorProfile";
import VisitorService from "@/src/services/visitorService";
import { Avatar, AvatarFallback, AvatarImage, Button, Card, Description, Form, Input, Label, Separator, TextArea, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { VscChevronRight } from "react-icons/vsc";
import Select from "react-select";
import { AppAlert } from "../common/AppAlert";
import Loader from "../common/Loader";

export default function MyProfileDetailsForm({ userData }: { userData: VisitorProfileResponse }) {
    const regex = /^\d*$/;

    const router = useRouter();

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


    const [selectedCountry, setSelectedCountry] = useState<any>(options.find(x => x.code === userData.phoneISOCode) || options.find(x => x.code === 'AU'));
    const [isPhoneFocused, setIsPhoneFocused] = useState(false);
    const [phoneSubmitError, setPhoneSubmitError] = useState(false);
    const [showLoader, setShowLoader] = useState<boolean>(false);
    // form inputs
    const [firstName, setFirstName] = useState<string>(userData.firstName);
    const [lastName, setLastName] = useState<string | undefined>(userData.lastName);
    const [email, setEmail] = useState<string>(userData.email);
    const [address, setAddress] = useState<string | undefined>(userData.address);
    const [phoneNumber, setPhoneNumber] = useState<string>(userData.phoneNumber);

    // page handlers
    const handleCountryChange = (event: any) => {
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
    const addressOnChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAddress(event.currentTarget.value);
    };

    const onAllProfileButtonClick = () => {
        router.push('/setting/profile/all');
    }

    const onFormInvalid = () => {
        AppAlert.error(AppMessages.Validation.mandatory);
    }

    const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const requestBody: VisitorProfileUpdateRequest = {
            visitorId: userData.visitorId,
            firstName: firstName,
            lastName: lastName,
            address: address
        }

        setShowLoader(true);
        const service = new VisitorService();
        const response = await service.updateUserProfile(requestBody).catch(e => {
            setShowLoader(false);
            AppAlert.error(e.message);
        });
        setShowLoader(false);
        if (response) {
            AppAlert.success(response.message);
        }
    }

    return (
        <>
            {showLoader && <Loader loadingText="Saving" loaderVisible="block" />}
            <Card className="w-full flex items-center justify-center bg-white">
                <Form className="w-full" onSubmit={onFormSubmit} onInvalid={onFormInvalid}>
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="font-bold text-black">
                                Add Profile
                            </h2>
                            <Button isIconOnly onClick={onAllProfileButtonClick}>
                                <VscChevronRight color="var(--accent)" />
                            </Button>
                        </div>
                        <div>
                            <p className="text-black">
                                Additional profiles can be added to your account to log a person who doesn't have their own mobile number such as a child or a relative.
                            </p>
                        </div>
                    </div>

                    <Separator className="mb-6" />

                    {/* Reorganized layout with labels on left */}
                    <div className=" md:space-y-6 xs:space-y-3">
                        {/* Full Name Row */}
                        <div className="flex items-start md:gap-6 xs:gap-3">
                            <div className="w-1/4 pt-2 xs:hidden md:block">
                                <Label className="text-black font-medium">Full Name</Label>
                            </div>
                            <div className="md:w-3/4 xs:w-full">
                                <div className="flex md:flex-row xs:flex-col md:gap-[16px] xs:gap-[10px]">
                                    <TextField className='grow' name="firstName" isRequired value={firstName} onChange={setFirstName}>
                                        <Label htmlFor="userFirstName" className=" md:hidden">First Name</Label>
                                        <Input type="text" id="userFirstName" placeholder="First Name" />
                                    </TextField>
                                    <TextField className='grow' name="lastName" value={lastName} onChange={setLastName}>
                                        <Label htmlFor="userLastName"className=" md:hidden">Last Name</Label>
                                        <Input type="text" id="userLastName" placeholder="Last Name" />
                                    </TextField>
                                </div>
                            </div>
                        </div>

                        {/* Email Row */}
                        <div className="flex items-start md:gap-6 xs:gap-3">
                            <div className="w-1/4 pt-2 xs:hidden md:block">
                                <Label className="text-black font-medium">Email</Label>
                            </div>
                            <div className="md:w-3/4 xs:w-full">
                                <TextField name="email" isReadOnly value={email}>
                                    <Label htmlFor="userEmail" className=" md:hidden">Email</Label>
                                    <Input type="text" id="userEmail" placeholder="Email" />
                                </TextField>
                            </div>
                        </div>

                        {/* Phone Row */}
                        <div className="flex items-start md:gap-6 xs:gap-3">
                            <div className="w-1/4 pt-2 xs:hidden md:block">
                                <Label className="text-black font-medium">Phone Number</Label>
                            </div>
                            <div className="md:w-3/4 xs:w-full">
                                <div className="mb-6">
                                    <div className="mb-[8px]  className= md:hidden">
                                        <Label className="">Phone Number</Label>
                                    </div>
                                    <Select
                                        name="phoneCodeISO"
                                        instanceId={"country_code_login"}
                                        isSearchable
                                        value={selectedCountry}
                                        defaultValue={selectedCountry}
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
                                                backgroundColor: "white",
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
                                    <TextField isRequired fullWidth name="phoneNumber" maxLength={15} minLength={9} value={phoneNumber} onChange={phoneNumberChangeEvent} isReadOnly>
                                        <div className="mt-[10px]">
                                            <Input placeholder="Phone Number" type="text" />
                                        </div>
                                        <Description>Please enter the phone number without plus sign (+) and country code.</Description>
                                    </TextField>
                                </div>
                            </div>
                        </div>

                        {/* Address Row - Same two-column layout */}
                        <div className="flex items-start md:gap-6 xs:gap-3">
                            <div className="w-1/4 pt-2 xs:hidden md:block">
                                <Label className="text-black font-medium">Address</Label>
                            </div>
                            <div className="md:w-3/4 xs:w-full">
                                <TextArea
                                    id="useraddress"
                                    name="address"
                                    aria-label="address"
                                    placeholder="Address"
                                    rows={3}
                                    style={{ resize: "vertical" }}
                                    value={address}
                                    onChange={addressOnChangeHandler}
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* <div className="mb-3 flex gap-[16px] flex-row">
                        <Button fullWidth variant="danger">Delete Account</Button>
                        <Button fullWidth type="submit">Save</Button>
                    </div> */}
                </Form>
            </Card>
            <div className="mb-3 mt-6 flex gap-[16px] md:flex-row xs:flex-col justify-between">
                <Button fullWidth variant="danger" className="sm:max-w-[200px]">Delete Account</Button>
                <Button fullWidth type="submit" className="sm:max-w-[200px]">Save</Button>
            </div>
        </>
    );
}