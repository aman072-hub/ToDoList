import React from "react";
import { Trash2, GripVertical } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const priorityConfig = {
  High:   { bg: "bg-red-100 text-red-700",    dot: "bg-red-500" },
  Medium: { bg: "bg-yellow-100 text-yellow-700", dot: "bg-yellow-500" },
  Low:    { bg: "bg-blue-100 text-blue-700",   dot: "bg-blue-500" },
};

// Check if a date string (YYYY-MM-DD) is before today
const isOverdue = (dateStr) => {
  if (!dateStr) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(dateStr) < today;
};

const formatDate = (dateStr) => {
  if (!dateStr) return null;
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
};

const TaskItem = ({ task, index, toggleComplete, deleteTask }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 50 : "auto",
  };

  const priority = task.priority || "Medium";
  const pConfig = priorityConfig[priority];
  const overdue = isOverdue(task.dueDate) && !task.completed;

  return (
    <li
      ref={setNodeRef}
      style={style}
      className={`flex justify-between items-center px-4 py-3 mb-2 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md border ${
        task.completed
          ? "bg-green-50 border-green-200"
          : "bg-white border-gray-100"
      } ${isDragging ? "shadow-xl ring-2 ring-blue-300" : ""}`}
    >
      {/* Drag handle */}
      <button
        {...attributes}
        {...listeners}
        className="mr-2 text-gray-300 hover:text-gray-500 cursor-grab active:cursor-grabbing shrink-0 touch-none"
        aria-label="Drag to reorder"
      >
        <GripVertical size={18} />
      </button>

      {/* Checkbox */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(index)}
        className="accent-blue-600 w-5 h-5 shrink-0 cursor-pointer mr-3"
      />

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Priority badge */}
          <span
            className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${pConfig.bg} shrink-0`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${pConfig.dot}`} />
            {priority}
          </span>

          {/* Title */}
          <h3
            className={`text-base font-medium truncate ${
              task.completed ? "line-through text-gray-400" : "text-gray-700"
            }`}
          >
            {task.title}
          </h3>

          {task.completed && (
            <span className="shrink-0 text-xs font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
              Done!
            </span>
          )}
        </div>

        {/* Due date */}
        {task.dueDate && (
          <p
            className={`text-xs mt-0.5 font-medium ${
              overdue ? "text-red-500" : "text-gray-400"
            }`}
          >
            {overdue ? "⚠️ Overdue · " : "📅 Due: "}
            {formatDate(task.dueDate)}
          </p>
        )}
      </div>

      {/* Delete */}
      <button
        onClick={() => deleteTask(index)}
        className="ml-4 bg-red-50 p-2 rounded-full text-red-400 hover:bg-red-500 hover:text-white hover:scale-110 transition-all duration-300 shrink-0"
        aria-label="Delete task"
      >
        <Trash2 size={16} />
      </button>
    </li>
  );
};

export default TaskItem;
