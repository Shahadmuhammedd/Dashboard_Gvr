import React from "react";

function Messages() {
  const messages = [
    { name: "Samantha William", message: "Lorem ipsum", time: "12:45 PM" },
    { name: "Tony Soap", message: "Hello there", time: "1:10 PM" },
    { name: "Jordan Nico", message: "What's up?", time: "2:00 PM" },
    { name: "Korean Hope", message: "See you later", time: "2:30 PM" },
  ];

  return (
    <div className="ml-4 -mt-10">
      {/* Header */}
      <div className="flex ml-3">
        <h1 className="text-[#303972] text-2xl font-bold">Messages</h1>
      </div>

      {/* Messages List */}
      {messages.map((msg, index) => (
        <div key={index} className="mt-8">
          {/* Single Message */}
          <div className="flex items-center">
            {/* User Avatar */}
            <img
              src=""
              alt=""
              className="w-12 h-12 bg-violet-200 rounded-full ml-4"
            />
            {/* User Info and Message */}
            <div className="ml-4 text-blue-900 font-semibold w-36">
              {msg.name} <br />
              <span className="text-[#A098AE] truncate">
                {msg.message}
              </span>
            </div>
            {/* Time */}
            <span className="ml-10  text-[#A098AE]">{msg.time}</span>
          </div>
          {/* Divider */}
          <div className="bg-[#A098AE] w-[300px] h-0.5 ml-5 mt-2"></div>
        </div>
      ))}

      {/* View More Button */}
      <button className="bg-[#4D44B51A] ml-[32px] mt-10 py-4 px-24 rounded-3xl text-blue-800 font-bold hover:bg-[#4D44B52A] transition-colors">
        View More
      </button>
    </div>
  );
}

export default Messages;
