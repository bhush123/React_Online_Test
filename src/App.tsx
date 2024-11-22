import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import Form from "./components/Form";

const App = () => {
  return (
    <div>
      <div>
        {/* navigation */}
        <nav className="flex justify-between bg-[#007AFF] px-8 py-5 items-center">
          <div className="flex items-center gap-3 ">
            <span className="inline-block w-10 h-10 bg-white rounded-full"></span>
            <span className="text-2xl font-medium text-white">
              Inventory Management System
            </span>
          </div>
          <div>
            <a href="#" className="text-lg text-white">
              Home
            </a>
          </div>
        </nav>
 
         <Form />
      </div>
    </div>
  );
};

export default App;
