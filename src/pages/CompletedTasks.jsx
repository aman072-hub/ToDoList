import React from "react";
import TaskRender from "../components/TaskList";

const CompletedTasks = ({ tasks, toggleComplete, deleteTask }) => {
  const completedTasks = tasks.filter((t) => t.completed);

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-700 mb-4 border-b pb-2">
        Completed Tasks
      </h2>

      <TaskRender
        tasks={completedTasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default CompletedTasks;
