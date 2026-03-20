import React from "react";
import { NavLink } from "react-router-dom";

const SubNav = () => {
  return (
    <div className="flex justify-center mt-4">
      <div className="flex gap-6 bg-white shadow-md rounded-full px-6 py-3">
        <NavLink
          to="/tasks"
          className="px-5 py-2 rounded-full font-semibold text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          Add Tasks
        </NavLink>

        <NavLink
          to="/completedtasks"
          className="px-5 py-2 rounded-full font-semibold text-gray-600 hover:bg-green-500 hover:text-white transition-all duration-300"
        >
          Completed
        </NavLink>
      </div>
    </div>
  );
};

export default SubNav;
