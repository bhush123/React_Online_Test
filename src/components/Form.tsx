import React, { useState } from "react";

const Form = () => {
//   const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {/* checked  btns */}
      <div className="flex items-center justify-center gap-8 pt-10">
        <div className="flex items-center gap-2">
        <input   className="w-5 h-5" type="checkbox" name="" id="" />
          <label htmlFor="" className="font-medium text-gray-700">
            Items
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input   className="w-5 h-5" type="checkbox" name="" id="" />
          <label htmlFor="" className="font-medium text-gray-700">
            Supplier
          </label>
        </div>
      </div>

      {/* items Details */}
      
        <div className="max-w-6xl mx-auto ">
          <h1 className="pt-10 text-4xl font-bold text-center">
            Items Details
          </h1>
          <form action="" className="bg-[#EBEEFD] p-9 rounded-3xl mt-10">
            <div className="grid grid-cols-2 gap-y-12 gap-x-20">
              {/* item name */}
              <div>
                <label htmlFor="" className="block font-medium">
                  Item Name
                </label>
                <input
                  className="block w-full px-3 py-2 rounded-[0.5rem]  border-gray-300 border-2 my-1 "
                  type="text"
                  placeholder="Enter item name"
                />
                <span className="block text-sm text-gray-500">
                  Max 50 characters
                </span>
              </div>

              {/* quantity */}
              <div>
                <label htmlFor="" className="block font-medium">
                  Quantity
                </label>
                <input
                  className="block w-full px-3 py-2 rounded-[0.5rem]  border-gray-300 border-2 my-1 "
                  type="text"
                  placeholder="Enter quantity"
                />
                <span className="block text-sm text-gray-500">
                  Numeric value
                </span>
              </div>

              {/* unit price  */}
              <div>
                <label htmlFor="" className="block font-medium">
                  Unit price
                </label>
                <input
                  className="block w-full px-3 py-2 rounded-[0.5rem]  border-gray-300 border-2 my-1 "
                  type="text"
                  placeholder="Enter unit price"
                />
                <span className="block text-sm text-gray-500">
                  Numeric value (USD)
                </span>
              </div>

              {/* date of submission  */}
              <div>
                <label htmlFor="" className="block font-medium">
                  Date of submission
                </label>
                <input
                  className="block w-full px-3 py-2 rounded-[0.5rem]  border-gray-300 border-2 my-1 "
                  type="text"
                  placeholder="Select date"
                />
                <span className="block text-sm text-gray-500">
                  Format: MM/DD/YYYY
                </span>
              </div>
            </div>
          </form>
        </div>
   

      {/* supplier Details */}
      
        <div className="max-w-6xl mx-auto ">
          <h1 className="pt-10 text-4xl font-bold text-center">
            Supplier Details
          </h1>
          <form action="" className="bg-[#EBEEFD] p-9 rounded-3xl mt-10">
            <div className="grid grid-cols-2 gap-y-12 gap-x-20">
              {/* Supplier Name */}
              <div>
                <label htmlFor="" className="block font-medium">
                  Supplier Name
                </label>
                <input
                  className="block w-full px-3 py-2 rounded-[0.5rem]  border-gray-300 border-2 my-1 "
                  type="text"
                  placeholder="Enter supplier name"
                />
                <span className="block text-sm text-gray-500">
                  Max 50 characters
                </span>
              </div>

              {/* company name */}
              <div>
                <label htmlFor="" className="block font-medium">
                  Company name
                </label>
                <input
                  className="block w-full px-3 py-2 rounded-[0.5rem]  border-gray-300 border-2 my-1 "
                  type="text"
                  placeholder="Enter company name"
                />
                <span className="block text-sm text-gray-500">
                  Max 50 characters
                </span>
              </div>

              {/* Country  */}
              <div>
                <label htmlFor="" className="block font-medium">
                  Country
                </label>
                <input
                  className="block w-full px-3 py-2 rounded-[0.5rem]  border-gray-300 border-2 my-1 "
                  type="text"
                  placeholder="Enter country"
                />
                <span className="block text-sm text-gray-500">
                  Select country from the list
                </span>
              </div>

              {/* State  */}
              <div>
                <label htmlFor="" className="block font-medium">
                  State
                </label>
                <input
                  className="block w-full px-3 py-2 rounded-[0.5rem]  border-gray-300 border-2 my-1 "
                  type="text"
                  placeholder=""
                />
                <span className="block text-sm text-gray-500">
                  Select country from the list
                </span>
              </div>

              {/* city  */}
              <div>
                <label htmlFor="" className="block font-medium">
                  City
                </label>
                <input
                  className="block w-full px-3 py-2 rounded-[0.5rem]  border-gray-300 border-2 my-1 "
                  type="text"
                  placeholder="Enter city"
                />
                <span className="block text-sm text-gray-500">
                  Max 50 characters
                </span>
              </div>

              {/* email  */}
              <div>
                <label htmlFor="" className="block font-medium">
                  Email Address
                </label>
                <input
                  className="block w-full px-3 py-2 rounded-[0.5rem]  border-gray-300 border-2 my-1 "
                  type="text"
                  placeholder="Enter email address"
                />
                <span className="block text-sm text-gray-500">
                  Valid email format
                </span>
              </div>
            </div>
          </form>
        </div>
   

      {/* submit btn */}
      <div className="flex flex-col items-center my-10">
        <h1 className="mb-6 text-4xl font-bold">Submitted Data</h1>
        <p className="mb-5 text-gray-700">
          The data submitted by users will be displayed below{" "}
        </p>
        <button className="text-white bg-[#007AFF] rounded-[.5rem] text-center py-[.6rem] px-14 text-lg">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Form;
