import React, { useState } from "react";

const PRIORITIES = ["High", "Medium", "Low"];

const priorityColors = {
  High: "border-red-400 bg-red-50 text-red-700",
  Medium: "border-yellow-400 bg-yellow-50 text-yellow-700",
  Low: "border-blue-400 bg-blue-50 text-blue-700",
};

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title.trim(), priority, dueDate);
    setTitle("");
    setPriority("Medium");
    setDueDate("");
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-3 mt-6 mb-5">
      {/* Title input + Add button */}
      <div className="flex gap-3 items-center">
        <input
          type="text"
          placeholder="✨ Enter a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 px-5 py-3 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm placeholder-gray-400 text-gray-700"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 text-base font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 shrink-0"
        >
          + Add
        </button>
      </div>

      {/* Priority + Due Date row */}
      <div className="flex gap-3 items-center pl-1">
        {/* Priority selector */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Priority
          </label>
          <div className="flex gap-1">
            {PRIORITIES.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPriority(p)}
                className={`text-xs font-semibold px-3 py-1 rounded-full border-2 transition-all duration-200 ${
                  priority === p
                    ? priorityColors[p] + " scale-105 shadow-sm"
                    : "border-gray-200 text-gray-400 bg-white hover:border-gray-300"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Due date */}
        <div className="flex items-center gap-2 ml-2">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Due
          </label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="text-sm border-2 border-gray-200 rounded-xl px-3 py-1 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
          />
          {dueDate && (
            <button
              type="button"
              onClick={() => setDueDate("")}
              className="text-gray-300 hover:text-gray-500 text-xs"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
