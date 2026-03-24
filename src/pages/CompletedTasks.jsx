import React from "react";
import TaskList from "../components/TaskList";

const CompletedTasks = ({ tasks, toggleComplete, deleteTask }) => {
  const completedTasks = tasks
    .map((task, index) => ({ ...task, originalIndex: index }))
    .filter((t) => t.completed);

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white rounded-2xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-gray-700 mb-1">Completed Tasks</h2>
      <p className="text-sm text-gray-400 mb-4 border-b pb-3">
        {completedTasks.length} task{completedTasks.length !== 1 ? "s" : ""} done
      </p>

      <TaskList
        tasks={completedTasks}
        toggleComplete={(i) => toggleComplete(completedTasks[i].originalIndex)}
        deleteTask={(i) => deleteTask(completedTasks[i].originalIndex)}
      />
    </div>
  );
};

export default CompletedTasks;
