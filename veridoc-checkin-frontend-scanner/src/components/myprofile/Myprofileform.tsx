"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function MyProfilePage() {
    const [isEditing, setIsEditing] = useState(true); // Start in editing mode
    const [profileData, setProfileData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleSave = () => {
        // Validate required fields
        if (!profileData.fullName.trim()) {
            alert("Full Name is required!");
            return;
        }

        if (!profileData.email.trim()) {
            alert("Email is required!");
            return;
        }

        if (!profileData.phone.trim()) {
            alert("Phone is required!");
            return;
        }

        if (!profileData.address.trim()) {
            alert("Address is required!");
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(profileData.email)) {
            alert("Please enter a valid email address!");
            return;
        }

        // Validate phone format (basic validation)
        const phoneRegex = /^\+?[0-9\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(profileData.phone)) {
            alert("Please enter a valid phone number!");
            return;
        }

        console.log("Profile saved:", profileData);
        alert("Profile saved successfully!");
        setIsEditing(false);
    };

    const handleDeleteAccount = () => {
        // Check if there's any data to delete
        const hasData = profileData.fullName || profileData.email || profileData.phone || profileData.address;

        if (!hasData) {
            alert("No profile data to delete!");
            return;
        }

        // Show confirmation dialog
        const userConfirmed = window.confirm(
            "Are you sure you want to delete your account? This action cannot be undone."
        );

        if (userConfirmed) {
            console.log("Account deleted:", profileData);

            // Clear all profile data
            setProfileData({
                fullName: "",
                email: "",
                phone: "",
                address: ""
            });

            // Switch back to editing mode
            setIsEditing(true);

            alert("Account deleted successfully!");
        } else {
            console.log("Account deletion cancelled");
        }
    };

    const handleChange = (field: string, value: string) => {
        setProfileData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleStartEditing = () => {
        setIsEditing(true);
    };

    const handleArrowClick = () => {
        console.log("Green arrow clicked!");
        alert("Arrow clicked! This would navigate to another page.");
        // Add your navigation logic here:
        // window.location.href = "/your-page";
    };

    return (
        <div className="flex items-center justify-center bg-white">
            <div className="w-full">
                {/* Profile Section */}
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="font-bold text-black">
                            Profile
                        </h2>
                        {/* Green Arrow Button */}
                        <button
                            onClick={handleArrowClick}
                            
                        >
                            <ChevronRight className="text-[#24984e]" size={25} />
                        </button>
                    </div>
                    <div>
                        <p className="text-black text-sm">
                            Additional profiles can be added to your account to log a person who doesn't have their own mobile number such as a child or a relative.
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-300 mb-3" />

                {/* Full Name */}
                <div className="mb-3">
                    <h3 className="font-bold text-black mb-1">
                        Full Name
                    </h3>
                    {isEditing ? (
                        <input
                            type="text"
                            value={profileData.fullName}
                            onChange={(e) => handleChange("fullName", e.target.value)}
                            className="w-full px-1 py-1 pl-0 text-black focus:outline-none"
                            placeholder="Enter full name"
                        />
                    ) : (
                        <div
                            onClick={handleStartEditing}
                            className="cursor-pointer hover:bg-gray-50 p-1 rounded"
                        >
                            <p className="text-black">
                                {profileData.fullName || "Click to add full name"}
                            </p>
                        </div>
                    )}
                </div>

                {/* Divider */}
                <hr className="border-gray-300 mb-3" />

                {/* Email */}
                <div className="mb-3">
                    <h3 className="font-bold text-black mb-1">
                        Email
                    </h3>
                    {isEditing ? (
                        <input
                            type="email"
                            value={profileData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            className="w-full px-1 py-1 pl-0 text-black focus:outline-none"
                            placeholder="Enter email address"
                        />
                    ) : (
                        <div
                            onClick={handleStartEditing}
                            className="cursor-pointer hover:bg-gray-50 p-1 rounded"
                        >
                            <p className="text-black">
                                {profileData.email || "Click to add email"}
                            </p>
                        </div>
                    )}
                </div>

                {/* Divider */}
                <hr className="border-gray-300 mb-3" />

                {/* Phone */}
                <div className="mb-3">
                    <h3 className="font-bold text-black mb-1">
                        Phone
                    </h3>
                    {isEditing ? (
                        <input
                            type="tel"
                            value={profileData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            className="w-full px-1 py-1 pl-0 text-black focus:outline-none"
                            placeholder="Enter phone number"
                        />
                    ) : (
                        <div
                            onClick={handleStartEditing}
                            className="cursor-pointer hover:bg-gray-50 p-1 rounded"
                        >
                            <p className="text-black">
                                {profileData.phone || "Click to add phone number"}
                            </p>
                        </div>
                    )}
                </div>

                {/* Divider */}
                <hr className="border-gray-300 mb-3" />

                {/* Address */}
                <div className="mb-3">
                    <h3 className="font-bold text-black mb-1">
                        Address
                    </h3>
                    {isEditing ? (
                        <input
                            type="text"
                            value={profileData.address}
                            onChange={(e) => handleChange("address", e.target.value)}
                            className="w-full px-1 py-1 pl-0 text-black focus:outline-none"
                            placeholder="Enter address"
                        />
                    ) : (
                        <div
                            onClick={handleStartEditing}
                            className="cursor-pointer hover:bg-gray-50 p-1 rounded"
                        >
                            <p className="text-black">
                                {profileData.address || "Click to add address"}
                            </p>
                        </div>
                    )}
                </div>

                {/* Divider */}
                <hr className="border-gray-300 mb-6" />

                {/* Action Buttons - Only Delete and Save */}
                <div className="flex gap-4">
                    {/* Delete Account Button */}
                    <button
                        onClick={handleDeleteAccount}
                        className="flex-1 h-[50px] bg-red-600 rounded-[8px] shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center cursor-pointer"
                    >
                        <span className="text-white font-medium">Delete Account</span>
                    </button>

                    {/* Save Button */}
                    <button
                        onClick={handleSave}
                        className="flex-1 h-[50px] bg-[#24984e] rounded-[8px] shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center cursor-pointer"
                    >
                        <span className="text-white font-medium">Save</span>
                    </button>
                </div>
            </div>
        </div>
    );
}