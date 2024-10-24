import React, { useState } from "react";
import { TrendingUp } from "lucide-react";

const complaintsData = [
  {
    id: "112233",
    date: "2 March 2021, 4:45 PM",
    amount: "50000",
    status: "Complete",
  },
  {
    id: "223344",
    date: "5 April 2021, 11:30 AM",
    amount: "10000",
    status: "Pending",
  },
  {
    id: "334455",
    date: "10 May 2021, 2:00 PM",
    amount: "7500",
    status: "Canceled",
  },
  {
    id: "445566",
    date: "15 June 2021, 9:00 AM",
    amount: "12000",
    status: "Complete",
  },
  {
    id: "556677",
    date: "18 July 2021, 6:30 PM",
    amount: "67000",
    status: "Pending",
  },
  {
    id: "667788",
    date: "22 August 2021, 1:00 PM",
    amount: "34000",
    status: "Canceled",
  },
];

const getStatusClass = (status) => {
  switch (status) {
    case "Complete":
      return "text-green-500";
    case "Pending":
      return "text-gray-500";
    case "Canceled":
      return "text-red-500";
    default:
      return "text-black";
  }
};

function Complaints() {
  const [currentPage, setCurrentPage] = useState(1);
  const complaintsPerPage = 3;

  const indexOfLastComplaint = currentPage * complaintsPerPage;
  const indexOfFirstComplaint = indexOfLastComplaint - complaintsPerPage;
  const currentComplaints = complaintsData.slice(
    indexOfFirstComplaint,
    indexOfLastComplaint
  );

  const totalPages = Math.ceil(complaintsData.length / complaintsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mt-10 ml-5 w-[600px] h-auto bg-white shadow-2xl rounded-2xl p-6">
      <h1 className="text-2xl font-bold mb-5 text-blue-800">Complaints</h1>

      {currentComplaints.map((complaint) => (
        <div
          key={complaint.id}
          className="mb-5 flex justify-between items-center"
        >
          <div className="flex items-center">
            <TrendingUp className="bg-orange-500 text-white w-12 h-12 rounded-full p-2" />
            <div className="ml-4">
              <h1 className="text-lg font-semibold">{complaint.id}</h1>
              <p className="text-sm text-gray-400">{complaint.date}</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <h1 className="text-lg font-semibold">{complaint.amount}</h1>
            <div
              className={`${getStatusClass(
                complaint.status
              )} text-lg font-semibold`}
            >
              {complaint.status}
            </div>
          </div>
        </div>
      ))}

      {/* Pagination controls */}
      <div className="flex justify-between items-center mt-12">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`bg-gray-200 text-gray-600 px-3 py-1 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400`}
        >
          Previous
        </button>

        <div className="flex space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`w-10 h-10 rounded-full ${
                currentPage === index + 1
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-600"
              } flex items-center justify-center hover:bg-gray-300`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`bg-gray-200 text-gray-600 px-3 py-1 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Complaints;
