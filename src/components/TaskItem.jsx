import React from "react";
import { Trash2 } from "lucide-react";

const TaskItem = ({ task, index, toggleComplete, deleteTask }) => {
  return (
    <li className="flex justify-between items-center bg-gray-100 px-5 py-3 mb-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(index)}
          className="accent-blue-600 w-5 h-5"
        />

        <h3
          className={`text-lg font-medium ${
            task.completed ? "line-through text-red-400" : "text-gray-700"
          }`}
        >
          {task.title}
        </h3>
      </div>

      <button
        onClick={() => deleteTask(index)}
        className="bg-red-500 p-2 rounded-full text-white hover:bg-red-600 hover:scale-110 transition-all duration-300"
      >
        <Trash2 size={18} />
      </button>
    </li>
  );
};

export default TaskItem;
