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
"use client";

import { Eye, User, Mail, Phone, MapPin, Plus } from "lucide-react";

export default function ProfilehistoryForm() {

  const handleCreateProfile = () => {
    alert("Create Profile Clicked");
  };

  const profiles = [
    { id: 1, name: "prasanta majumder", email: "prasanta@yourflow.com.au", phone: "+9179806***87", address: "24" },
    { id: 2, name: "prasanta majumder", email: "prasanta@yourflow.com.au", phone: "+9179806***87", address: "24" },
    { id: 3, name: "prasanta majumder", email: "prasanta@yourflow.com.au", phone: "+9179806***87", address: "24" },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[22px] font-semibold text-[#24984e]">
          Current Profiles
        </h2>
        <button
          onClick={handleCreateProfile}
          className="bg-[#24984e] text-white h-[50px] px-5 py-2 rounded flex items-center gap-2"
        >
          <Plus size={18} /> Create Profile
        </button>
      </div>

      <hr className="mb-6" />

      {/* Row Container */}
      <div className="flex flex-wrap -mx-4">
        {profiles.map((profile) => (
          <div key={profile.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
            <div className="bg-white rounded p-5 shadow-[0_0_0.25em_rgba(67,71,85,0.27),0_0.25em_1em_rgba(90,125,188,0.05)] h-full">
              {/* Name Row */}
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <User className="text-[#24984e]" />
                  <p className="font-semibold">
                    {profile.name} <span className="text-gray-500">(You)</span>
                  </p>
                </div>
                <Eye className="text-gray-500 cursor-pointer" />
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 mb-3">
                <Mail className="text-[#24984e]" size={18} />
                <p>{profile.email}</p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 mb-3">
                <Phone className="text-[#24984e]" size={18} />
                <p>{profile.phone}</p>
              </div>

              {/* Address */}
              <div className="flex items-center gap-3">
                <MapPin className="text-[#24984e]" size={18} />
                <p>{profile.address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}