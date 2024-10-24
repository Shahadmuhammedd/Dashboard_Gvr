import React from "react";

function ServiceCategory() {
  const categories = [
    { name: "Mechanic", bgColor: "bg-violet-200" },
    { name: "House Keeping", bgColor: "bg-violet-200" },
    { name: "Laundry", bgColor: "bg-violet-200" },
  ];

  return (
    <div className="mt-9 ml-4">
      {/* Header */}
      <div className="flex ml-3">
        <h1 className="text-[#303972] text-2xl font-bold">Service Categories</h1>
      </div>

      {/* Service Categories List */}
      {categories.map((category, index) => (
        <div key={index} className="mt-8">
          <div className={`w-[300px] h-[160px] ml-2 rounded-2xl ${category.bgColor}`}></div>
          <h1 className="ml-4 mt-2 text-blue-900 font-semibold text-xl">
            {category.name}
          </h1>
        </div>
      ))}

      {/* View More Button */}
      <div className="mt-7">
        <button className="bg-[#4D44B51A] ml-[22px] py-4 px-24 rounded-3xl text-blue-800 font-bold hover:bg-[#4D44B52A] transition-colors">
          View More
        </button>
      </div>
    </div>
  );
}

export default ServiceCategory;
