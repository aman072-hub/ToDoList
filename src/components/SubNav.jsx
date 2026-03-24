import React from "react";
import { NavLink } from "react-router-dom";

const SubNav = () => {
  const linkClass = ({ isActive }) =>
    `px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
      isActive
        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
        : "text-gray-600 hover:bg-blue-100 hover:text-blue-700"
    }`;

  return (
    <div className="flex justify-center mt-4">
      <div className="flex gap-3 bg-white shadow-md rounded-full px-4 py-2 border border-gray-100">
        <NavLink to="/tasks" className={linkClass}>
          📝 All Tasks
        </NavLink>

        <NavLink to="/completedtasks" className={linkClass}>
          ✅ Completed
        </NavLink>
      </div>
    </div>
  );
};

export default SubNav;
