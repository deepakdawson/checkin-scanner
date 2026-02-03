// "use client";

// import { Eye, User, Mail, Phone, MapPin, Plus } from "lucide-react";

// export default function ProfilehistoryForm() {

//   const handleCreateProfile = () => {
//     alert("Create Profile Clicked");
//   };

//   return (
//     <div className="w-full">

//       {/* Header */}
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-[22px] font-semibold text-[#24984e]">
//           Current Profiles
//         </h2>

//         <button
//           onClick={handleCreateProfile}
//           className="bg-[#24984e] text-white px-5 py-2 rounded flex items-center gap-2"
//         >
//           <Plus size={18} /> Create Profile
//         </button>
//       </div>

//       <hr className="mb-6" />

//       {/* Profile Card */}
//       <div className="w-[420px] bg-white rounded p-5 shadow-[0_0_0.25em_rgba(67,71,85,0.27),0_0.25em_1em_rgba(90,125,188,0.05)]">
//         {/* Name Row */}
//         <div className="flex justify-between items-center mb-3">
//           <div className="flex items-center gap-2">
//             <User className="text-[#24984e]" />
//             <p className="font-semibold">
//               prasanta majumder <span className="text-gray-500">(You)</span>
//             </p>
//           </div>

//           <Eye className="text-gray-500 cursor-pointer" />
//         </div>

//         {/* Email */}
//         <div className="flex items-center gap-3 mb-3">
//           <Mail className="text-[#24984e]" size={18} />
//           <p>prasanta@yourflow.com.au</p>
//         </div>

//         {/* Phone */}
//         <div className="flex items-center gap-3 mb-3">
//           <Phone className="text-[#24984e]" size={18} />
//           <p>+9179806***87</p>
//         </div>

//         {/* Address */}
//         <div className="flex items-center gap-3">
//           <MapPin className="text-[#24984e]" size={18} />
//           <p>24</p>
//         </div>

//       </div>

//     </div>
//   );
// }
// "use client";

// import { Eye, User, Mail, Phone, MapPin, Plus } from "lucide-react";

// export default function ProfilehistoryForm() {

//   const handleCreateProfile = () => {
//     alert("Create Profile Clicked");
//   };

//   return (
//     <div className="w-full">

//       {/* Header */}
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-[22px] font-semibold text-[#24984e]">
//           Current Profiles
//         </h2>

//         <button
//           onClick={handleCreateProfile}
//           className="bg-[#24984e] text-white px-5 py-2 rounded flex items-center gap-2"
//         >
//           <Plus size={18} /> Create Profile
//         </button>
//       </div>

//       <hr className="mb-6" />

//       {/* Profile Cards Container - Added wrapper div */}
//       <div className="flex flex-wrap gap-6">

//         {/* First Profile Card */}
//         <div className="w-[420px] bg-white rounded p-5 shadow-[0_0_0.25em_rgba(67,71,85,0.27),0_0.25em_1em_rgba(90,125,188,0.05)]">
//           {/* Name Row */}
//           <div className="flex justify-between items-center mb-3">
//             <div className="flex items-center gap-2">
//               <User className="text-[#24984e]" />
//               <p className="font-semibold">
//                 prasanta majumder <span className="text-gray-500">(You)</span>
//               </p>
//             </div>

//             <Eye className="text-gray-500 cursor-pointer" />
//           </div>

//           {/* Email */}
//           <div className="flex items-center gap-3 mb-3">
//             <Mail className="text-[#24984e]" size={18} />
//             <p>prasanta@yourflow.com.au</p>
//           </div>

//           {/* Phone */}
//           <div className="flex items-center gap-3 mb-3">
//             <Phone className="text-[#24984e]" size={18} />
//             <p>+9179806***87</p>
//           </div>

//           {/* Address */}
//           <div className="flex items-center gap-3">
//             <MapPin className="text-[#24984e]" size={18} />
//             <p>24</p>
//           </div>
//         </div>

//         {/* Second Profile Card */}
//         <div className="w-[420px] bg-white rounded p-5 shadow-[0_0_0.25em_rgba(67,71,85,0.27),0_0.25em_1em_rgba(90,125,188,0.05)]">
//           {/* Name Row */}
//           <div className="flex justify-between items-center mb-3">
//             <div className="flex items-center gap-2">
//               <User className="text-[#24984e]" />
//               <p className="font-semibold">
//                 prasanta majumder <span className="text-gray-500">(You)</span>
//               </p>
//             </div>

//             <Eye className="text-gray-500 cursor-pointer" />
//           </div>

//           {/* Email */}
//           <div className="flex items-center gap-3 mb-3">
//             <Mail className="text-[#24984e]" size={18} />
//             <p>prasanta@yourflow.com.au</p>
//           </div>

//           {/* Phone */}
//           <div className="flex items-center gap-3 mb-3">
//             <Phone className="text-[#24984e]" size={18} />
//             <p>+9179806***87</p>
//           </div>

//           {/* Address */}
//           <div className="flex items-center gap-3">
//             <MapPin className="text-[#24984e]" size={18} />
//             <p>24</p>
//           </div>
//         </div>

//         <div className="w-[420px] bg-white rounded p-5 shadow-[0_0_0.25em_rgba(67,71,85,0.27),0_0.25em_1em_rgba(90,125,188,0.05)]">
//           {/* Name Row */}
//           <div className="flex justify-between items-center mb-3">
//             <div className="flex items-center gap-2">
//               <User className="text-[#24984e]" />
//               <p className="font-semibold">
//                 prasanta majumder <span className="text-gray-500">(You)</span>
//               </p>
//             </div>

//             <Eye className="text-gray-500 cursor-pointer" />
//           </div>

//           {/* Email */}
//           <div className="flex items-center gap-3 mb-3">
//             <Mail className="text-[#24984e]" size={18} />
//             <p>prasanta@yourflow.com.au</p>
//           </div>

//           {/* Phone */}
//           <div className="flex items-center gap-3 mb-3">
//             <Phone className="text-[#24984e]" size={18} />
//             <p>+9179806***87</p>
//           </div>

//           {/* Address */}
//           <div className="flex items-center gap-3">
//             <MapPin className="text-[#24984e]" size={18} />
//             <p>24</p>
//           </div>
//         </div>

//       </div>

//     </div>
//   );
// }
// "use client";

// import { Eye, User, Mail, Phone, MapPin, Plus } from "lucide-react";

// export default function ProfilehistoryForm() {

//   const handleCreateProfile = () => {
//     alert("Create Profile Clicked");
//   };

//   return (
//     <div className="w-full">

//       {/* Header */}
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-[22px] font-semibold text-[#24984e]">
//           Current Profiles
//         </h2>

//         <button
//           onClick={handleCreateProfile}
//           className="bg-[#24984e] text-white px-5 py-2 rounded flex items-center gap-2"
//         >
//           <Plus size={18} /> Create Profile
//         </button>
//       </div>

//       <hr className="mb-6" />

//       {/* Profile Cards Container - Grid Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

//         {/* Profile Cards - All three will have equal width */}
//         {[1, 2, 3].map((item) => (
//           <div key={item} className="bg-white rounded p-5 shadow-[0_0_0.25em_rgba(67,71,85,0.27),0_0.25em_1em_rgba(90,125,188,0.05)]">
//             {/* Name Row */}
//             <div className="flex justify-between items-center mb-3">
//               <div className="flex items-center gap-2">
//                 <User className="text-[#24984e]" />
//                 <p className="font-semibold">
//                   prasanta majumder <span className="text-gray-500">(You)</span>
//                 </p>
//               </div>

//               <Eye className="text-gray-500 cursor-pointer" />
//             </div>

//             {/* Email */}
//             <div className="flex items-center gap-3 mb-3">
//               <Mail className="text-[#24984e]" size={18} />
//               <p>prasanta@yourflow.com.au</p>
//             </div>

//             {/* Phone */}
//             <div className="flex items-center gap-3 mb-3">
//               <Phone className="text-[#24984e]" size={18} />
//               <p>+9179806***87</p>
//             </div>

//             {/* Address */}
//             <div className="flex items-center gap-3">
//               <MapPin className="text-[#24984e]" size={18} />
//               <p>24</p>
//             </div>
//           </div>
//         ))}

//       </div>

//     </div>
//   );
// }
// "use client";

// import { Eye, User, Mail, Phone, MapPin, Plus } from "lucide-react";

// export default function ProfilehistoryForm() {

//   const handleCreateProfile = () => {
//     alert("Create Profile Clicked");
//   };

//   const profiles = [
//     { id: 1, name: "prasanta majumder", email: "prasanta@yourflow.com.au", phone: "+9179806***87", address: "24" },
//     { id: 2, name: "prasanta majumder", email: "prasanta@yourflow.com.au", phone: "+9179806***87", address: "24" },
//     { id: 3, name: "prasanta majumder", email: "prasanta@yourflow.com.au", phone: "+9179806***87", address: "24" },
//   ];

//   return (
//     <div className="w-full">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-[22px] font-semibold text-[#24984e]">
//           Current Profiles
//         </h2>
//         <button
//           onClick={handleCreateProfile}
//           className="bg-[#24984e] text-white h-[50px] px-5 py-2 rounded flex items-center gap-2"
//         >
//           <Plus size={18} /> Create Profile
//         </button>
//       </div>

//       <hr className="mb-6" />

//       {/* Row Container */}
//       <div className="flex flex-wrap -mx-4">
//         {profiles.map((profile) => (
//           <div key={profile.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
//             <div className="bg-white rounded p-5 shadow-[0_0_0.25em_rgba(67,71,85,0.27),0_0.25em_1em_rgba(90,125,188,0.05)] h-full">
//               {/* Name Row */}
//               <div className="flex justify-between items-center mb-3">
//                 <div className="flex items-center gap-2">
//                   <User className="text-[#24984e]" />
//                   <p className="font-semibold">
//                     {profile.name} <span className="text-gray-500">(You)</span>
//                   </p>
//                 </div>
//                 <Eye className="text-gray-500 cursor-pointer" />
//               </div>

//               {/* Email */}
//               <div className="flex items-center gap-3 mb-3">
//                 <Mail className="text-[#24984e]" size={18} />
//                 <p>{profile.email}</p>
//               </div>

//               {/* Phone */}
//               <div className="flex items-center gap-3 mb-3">
//                 <Phone className="text-[#24984e]" size={18} />
//                 <p>{profile.phone}</p>
//               </div>

//               {/* Address */}
//               <div className="flex items-center gap-3">
//                 <MapPin className="text-[#24984e]" size={18} />
//                 <p>{profile.address}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// "use client";

// import {
//   Card,
//   CardContent,
//   Button,
//   Avatar,
//   Chip,
// } from "@heroui/react";

// import { Eye, Mail, Phone, MapPin, Plus } from "lucide-react";

// export default function ProfilehistoryForm() {
//   const profiles = [
//     { id: 1, name: "prasanta majumder", email: "prasanta@yourflow.com.au", phone: "+9179806***87", address: "24" },
//     { id: 2, name: "prasanta majumder", email: "prasanta@yourflow.com.au", phone: "+9179806***87", address: "24" },
//     { id: 3, name: "prasanta majumder", email: "prasanta@yourflow.com.au", phone: "+9179806***87", address: "24" },
//   ];

//   return (
//     <div className="w-full">

//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-[22px] font-semibold text-[#24984e]">
//           Current Profiles
//         </h2>

//         {/* HeroUI Button (no startContent) */}
//         <Button className="bg-[#24984e] text-white flex gap-2">
//           <Plus size={18} />
//           Create Profile
//         </Button>
//       </div>

//       <hr className="mb-6" />

//       {/* Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//         {profiles.map((profile) => (
//           <Card
//             key={profile.id}
//             className="shadow-[0_0_0.25em_rgba(67,71,85,0.27),0_0.25em_1em_rgba(90,125,188,0.05)]"
//           >
//             <CardContent className="p-5 space-y-3">

//               {/* Header */}
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center gap-3">

//                   {/* Avatar has NO name prop in HeroUI v3 */}
//                   <Avatar size="sm">P</Avatar>

//                   <div>
//                     <p className="font-semibold">{profile.name}</p>

//                     {/* Chip variant fixed */}
//                     <Chip size="sm" variant="soft" className="text-[#24984e]">
//                       You
//                     </Chip>
//                   </div>

//                 </div>

//                 <Eye className="text-gray-400 cursor-pointer" />
//               </div>

//               {/* Email */}
//               <div className="flex items-center gap-3">
//                 <Mail size={18} className="text-[#24984e]" />
//                 <p>{profile.email}</p>
//               </div>

//               {/* Phone */}
//               <div className="flex items-center gap-3">
//                 <Phone size={18} className="text-[#24984e]" />
//                 <p>{profile.phone}</p>
//               </div>

//               {/* Address */}
//               <div className="flex items-center gap-3">
//                 <MapPin size={18} className="text-[#24984e]" />
//                 <p>{profile.address}</p>
//               </div>

//             </CardContent>
//           </Card>
//         ))}

//       </div>
//     </div>
//   );
// }
"use client";

import {
  Card,
  CardContent,
  Button,
  Avatar,
  Chip,
} from "@heroui/react";

import {
  FiEye,
  FiMail,
  FiPhone,
  FiMapPin,
  FiPlus,
  FiUser,
} from "react-icons/fi";

export default function ProfilehistoryForm() {
  const profiles = [
    { id: 1, name: "prasanta majumder", email: "prasanta@yourflow.com.au", phone: "+9179806***87", address: "24" },
    { id: 2, name: "prasanta majumder", email: "prasanta@yourflow.com.au", phone: "+9179806***87", address: "24" },
    { id: 3, name: "prasanta majumder", email: "prasanta@yourflow.com.au", phone: "+9179806***87", address: "24" },
  ];

  return (
    <div className="w-full">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[22px] font-semibold text-[#24984e]">
          Current Profiles
        </h2>

        <Button className="bg-[#24984e] max-w-[200px] text-white flex items-center gap-2">
          <FiPlus size={18} />
          Create Profile
        </Button>
      </div>

      <hr className="mb-6" />

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {profiles.map((profile) => (
          <Card
            key={profile.id}
            className="rounded-lg shadow-[0_0_0.25em_rgba(67,71,85,0.27),0_0.25em_1em_rgba(90,125,188,0.05)]"
          >

            <CardContent className="p-5 space-y-3">

              {/* Header Row */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">

                  {/* Avatar with User Icon */}
                  {/* <Avatar size="sm">
                    
                  </Avatar> */}

                  {/* Name + You */}
                  <FiUser className="text-[#24984e]" />
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{profile.name}</p>

                    <Chip size="sm" variant="soft" className="text-[#24984e]">
                      You
                    </Chip>
                  </div>

                </div>

                <FiEye className="text-gray-400 cursor-pointer" />
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <FiMail className="text-[#24984e]" />
                <p>{profile.email}</p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <FiPhone className="text-[#24984e]" />
                <p>{profile.phone}</p>
              </div>

              {/* Address */}
              <div className="flex items-center gap-3">
                <FiMapPin className="text-[#24984e]" />
                <p>{profile.address}</p>
              </div>

            </CardContent>
          </Card>
        ))}

      </div>
    </div>
  );
}
