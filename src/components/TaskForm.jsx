// take the data from the user through input tag and send it the the app.jsx(the controller)

import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex justify-center items-center gap-4 mt-6 mb-5"
    >
      <input
        type="text"
        placeholder="✨ Enter a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-[300px] px-5 py-3 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm placeholder-gray-400 text-gray-700"
      />

      <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 text-lg font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
        + Add
      </button>
    </form>
  );
};

export default TaskForm;
