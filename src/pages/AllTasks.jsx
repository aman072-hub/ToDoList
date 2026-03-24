import React from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const AllTasks = ({ tasks, addTask, toggleComplete, deleteTask, search, reorderTasks }) => {
  const filteredTasks = search
    ? tasks.filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase())
      )
    : tasks;

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white rounded-2xl shadow-xl p-6 relative">
      <h2 className="text-2xl font-bold text-gray-700 mb-1">Your Tasks</h2>
      <p className="text-sm text-gray-400 mb-4 border-b pb-3">
        {tasks.length} task{tasks.length !== 1 ? "s" : ""} total
      </p>

      <TaskForm addTask={addTask} />

      <TaskList
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        // Only pass reorderTasks when not searching (reorder doesn't make sense on a filtered view)
        reorderTasks={search ? undefined : reorderTasks}
      />
    </div>
  );
};

export default AllTasks;
