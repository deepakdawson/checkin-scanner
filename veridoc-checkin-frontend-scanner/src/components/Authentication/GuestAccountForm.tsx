'use client'
import { Autocomplete, Avatar, AvatarFallback, AvatarImage, Button, Description, Form, Input, Label, ListBox, SearchField, TextArea, TextField, useFilter } from "@heroui/react";
import { countries } from "@/src/models/data/countries";
import type { Key } from "@heroui/react";
import { useState } from "react";


function GuestAccountForm() {

    const [selectedCountry, setSelectedCountry] = useState<Key | null>('AU');

    // use filter
    const { contains } = useFilter({ sensitivity: 'base' });

    // page handlers
    const handleCountryChange = (event: any) => {
        console.log(event);
        setSelectedCountry(event);
    };


    return <>
        <Form>
            {/* FULL NAME INPUT */}
            <div className="mb-[10px]">
                <TextField isRequired fullWidth name="fullName">
                    <Label className="font-bold text-base">Full Name</Label>
                    <Input placeholder="Full Name" type="text" />
                </TextField>
            </div>

            {/* FULL NAME INPUT */}
            <div className="mb-[10px]">
                <TextField isRequired fullWidth name="email">
                    <Label className="font-bold text-base">Email</Label>
                    <Input placeholder="Email" type="email" />
                </TextField>
            </div>

            {/* country list */}
            <div className="mb-[10px]">
                <Autocomplete
                isRequired
                    placeholder="Select Country"
                    selectionMode="single"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    aria-label="Country"
                    aria-labelledby="Country"
                    name="countryISO"
                >
                    <Label className="font-bold text-base">Country</Label>
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
            </div>
                                
            {/* phone number input*/}
            <div className="mb-[20px]">
                <TextField isRequired fullWidth name="phoneNumber">
                    <Label className="font-bold text-base">Phone Number</Label>
                    <Input placeholder="Phone Number" type="text" />
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
                    style={{resize: "vertical"}}
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