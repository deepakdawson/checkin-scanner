'use client'
import { countries, Country, CustomOption } from "@/src/models/data/countries";
import { useMemo, useState } from "react";
import { Autocomplete, Avatar, AvatarFallback, AvatarImage, Button, Description, Form, Input, InputGroup, Label, ListBox, NumberField, SearchField, TextField, useFilter } from "@heroui/react";
import type { Key } from "@heroui/react";


function LoginForm() {
    // country list options
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

    const [userLoginType, setUserLogInType] = useState<string>('email');
    const [selectedCountry, setSelectedCountry] = useState<Key | null>('AU');

    // use filter
    const { contains } = useFilter({ sensitivity: 'base' });

    // page handlers
    const handleCountryChange = (event: any) => {
        console.log(event);
        setSelectedCountry(event);
    };



    return <>
        {/* user login form */}
        <Form>
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
                                <AvatarImage src='/mail.svg'></AvatarImage>
                            </Avatar>
                        </InputGroup.Prefix>
                        <InputGroup.Input placeholder="name@email.com" />
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
                                            <Avatar className="size-4" size="sm">
                                                <AvatarImage src={`https://flagcdn.com/${selectedItem.code.toLowerCase()}.svg`} />
                                                <AvatarFallback>{selectedItem.code}</AvatarFallback>
                                            </Avatar>
                                            <span>{selectedItem.name}</span>
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
                                <ListBox>
                                    {countries.map((country) => (
                                        <ListBox.Item key={country.code} id={country.code} textValue={country.name}>
                                            <Avatar size="sm">
                                                <AvatarImage src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`} />
                                                <AvatarFallback>{country.code}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <span>{country.name}</span>
                                            </div>
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    ))}
                                </ListBox>
                            </Autocomplete.Filter>
                        </Autocomplete.Popover>
                    </Autocomplete>

                    <TextField  aria-label="phone number" aria-labelledby="phone number">
                        <Input type="number" placeholder="Phone Number" pattern="[0-9]*"/>
                    </TextField>

                </div>
            )}


        </Form>

    </>
}

export default LoginForm;