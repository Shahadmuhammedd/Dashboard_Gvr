import React from "react";
import { Plus, Mail } from "lucide-react";

function RecentActivities() {
  const users = [
    { name: "Samantha William", location: "Kochi" },
    { name: "Tony Soap", location: "Kochi" },
    { name: "Korean Hope", location: "Kochi" },
    { name: "Jordan Nico", location: "Kochi" },
  ];

  return (
    <div className="mt-9 ml-4 h-[557px]">
      {/* Header */}
      <div className="flex items-center ml-3">
        <h1 className="text-[#303972] text-2xl font-bold">Recent Activities</h1>
        <Plus className="bg-blue-900 text-white w-10 h-10 p-2 ml-24 rounded-full cursor-pointer hover:bg-blue-800 transition-all" />
      </div>
      <p className="text-[#A098AE] ml-4 mt-2">
        You have <span className="font-semibold">456 New</span> Users
      </p>

      {/* Users List */}
      {users.map((user, index) => (
        <div key={index} className="flex items-center mt-8 ml-4">
          {/* Avatar */}
          <img
            src="" 
            alt="" 
            className="w-12 h-12 bg-violet-200 rounded-full" 
          />
          {/* User Info */}
          <div className="ml-4 text-blue-900 font-semibold w-36">
            {user.name} <br />
            <span className="text-[#A098AE]">{user.location}</span>
          </div>
          {/* Mail Icon */}
          <span className="ml-16 px-3 py-3 ring-1 ring-gray-300 hover:bg-blue-800 hover:text-white w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer">
            <Mail />
          </span>
        </div>
      ))}

      {/* View More Button */}
      <button className="bg-[#4D44B51A] ml-[32px] mt-8 py-4 px-24 rounded-3xl text-blue-800 font-bold transition-colors hover:bg-[#4D44B52A]">
        View More
      </button>
    </div>
  );
}

export default RecentActivities;
