'use client'
import { countries } from "@/src/models/data/countries";
import type { Key } from "@heroui/react";
import { Autocomplete, Avatar, AvatarFallback, AvatarImage, Button, Form, Input, InputGroup, ListBox, Modal, SearchField, TextField, useFilter } from "@heroui/react";
import { useState } from "react";


function LoginForm() {
    const [userLoginType, setUserLogInType] = useState<string>('email');
    const [selectedCountry, setSelectedCountry] = useState<Key | null>('AU');
    const [showOtpModal, setShowOtpModal] = useState<boolean>(false);

    // use filter
    const { contains } = useFilter({ sensitivity: 'base' });

    // page handlers
    const handleCountryChange = (event: any) => {
        console.log(event);
        setSelectedCountry(event);
    };



    return <>
        {/* user login form */}
        <Form className="w-full flex flex-col gap-6 mb-2 relative">
            <Button type="button" variant="primary" fullWidth>Continue as a Guest</Button>
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
                    <Autocomplete
                        className="w-[256px]"
                        placeholder="Select Country"
                        selectionMode="single"
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        aria-label="Country"
                        aria-labelledby="Country"
                    >
                        <Autocomplete.Trigger>
                            <Autocomplete.Value>
                                {({ defaultChildren, isPlaceholder, state }) => {
                                    if (isPlaceholder || state.selectedItems.length === 0) {
                                        return defaultChildren;
                                    }
                                    const selectedItems = state.selectedItems;
                                    if (selectedItems.length > 1) {
                                        return `${selectedItems.length} users selected`;
                                    }
                                    const selectedItem = countries.find((country) => country.code === selectedItems[0]?.key);
                                    if (!selectedItem) {
                                        return defaultChildren;
                                    }
                                    return (
                                        <div className="flex items-center gap-2">
                                            <Avatar size="sm">
                                                <AvatarImage src={`https://flagcdn.com/${selectedItem.code.toLowerCase()}.svg`} />
                                                <AvatarFallback>{selectedItem.code}</AvatarFallback>
                                            </Avatar>
                                            <span>{selectedItem.name} ({selectedItem.dial_code})</span>
                                        </div>
                                    );
                                }}
                            </Autocomplete.Value>
                            {/* <Autocomplete.ClearButton /> */}
                            <Autocomplete.Indicator />
                        </Autocomplete.Trigger>
                        <Autocomplete.Popover>
                            <Autocomplete.Filter filter={contains}>
                                <SearchField autoFocus name="search">
                                    <SearchField.Group>
                                        <SearchField.SearchIcon />
                                        <SearchField.Input placeholder="Search countires..." />
                                        <SearchField.ClearButton />
                                    </SearchField.Group>
                                </SearchField>
                                <ListBox aria-label="country">
                                    {countries.map((country) => (
                                        <ListBox.Item key={country.code} id={country.code} textValue={country.name} aria-label="country">
                                            <Avatar size="sm">
                                                <AvatarImage src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`} />
                                                <AvatarFallback>{country.code}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <span>{country.name} ({country.dial_code})</span>
                                            </div>
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    ))}
                                </ListBox>
                            </Autocomplete.Filter>
                        </Autocomplete.Popover>
                    </Autocomplete>

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
                        <Modal.Dialog className="sm:max-w-[360px]">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-default text-foreground">
                                    close
                                </Modal.Icon>
                                <Modal.Heading>Welcome to HeroUI</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body>
                                <p>
                                    A beautiful, fast, and modern React UI library for building accessible and
                                    customizable web applications with ease.
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button className="w-full" slot="close">
                                    Continue
                                </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        )}

    </>
}

export default LoginForm;