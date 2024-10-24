import React from "react";
import { User } from "lucide-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const IncompleteBooking = () => {
  const bookingData = [
    { id: 112233, name: "Samantha W.", amount: 5000 },
    { id: 112234, name: "John D.", amount: 4500 },
    { id: 112235, name: "Olivia M.", amount: 4000 },
    { id: 112236, name: "Michael B.", amount: 5500 },
    { id: 112237, name: "Emily R.", amount: 3200 },
    { id: 1122, name: "shahad", amount: 2000 },
  ];

  const [active, setActive] = React.useState(1);
  const bookingsPerPage = 4;


  const indexOfLastBooking = active * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = bookingData.slice(
    indexOfFirstBooking,
    indexOfLastBooking
  );

  // Calculate total pages
  const totalPages = Math.ceil(bookingData.length / bookingsPerPage);

  // Pagination functions
  const handleNextPage = () => {
    if (active < totalPages) {
      setActive((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (active > 1) {
      setActive((prev) => prev - 1);
    }
  };

  return (
    <div className="w-[580px] bg-white h-[400px] shadow-2xl rounded-2xl ml-[100px] mt-10 p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">
        Incomplete Bookings
      </h1>

      
      {currentBookings.map((booking) => (
        <div key={booking.id} className="grid grid-cols-2 mt-4">
          <div className="flex">
            <img
              src=""
              alt=""
              className="w-10 h-10 rounded-full bg-violet-200"
            />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-blue-700">
                {booking.name}
              </h2>
              <p className="text-sm text-gray-500">ID: {booking.id}</p>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <span className="bg-orange-500 py-2 px-2 rounded-full">
              <User className="text-white" />
            </span>
            <span className="mt-1 ml-3">
              <h2 className="text-gray-400">User Name</h2>
            </span>
            <span className="text-xl font-semibold ml-4 mt-1">
              ${booking.amount}
            </span>
          </div>
        </div>
      ))}

    
      <div className="flex justify-between items-center mt-[10px]  ">
        <p className="text-sm text-gray-500">
          Showing {bookingsPerPage * (active - 1) + 1}-
          {Math.min(bookingsPerPage * active, bookingData.length)} from{" "}
          {bookingData.length} bookings
        </p>

        <div className="flex items-center space-x-2">
          {/* Previous Button */}
          <button
            className={`p-2 rounded-full ${
              active === 1 ? "text-gray-400" : "text-gray-700"
            }`}
            onClick={handlePreviousPage}
            disabled={active === 1}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>

          {/* Page numbers */}
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setActive(index + 1)}
              className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
                active === index + 1
                  ? "bg-purple-600 text-white"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {index + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            className={`p-2 rounded-full ${
              active === totalPages ? "text-gray-400" : "text-gray-700"
            }`}
            onClick={handleNextPage}
            disabled={active === totalPages}
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncompleteBooking;
