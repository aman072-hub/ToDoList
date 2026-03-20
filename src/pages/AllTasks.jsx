import React from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const AllTasks = ({ tasks, addTask, toggleComplete, deleteTask, search }) => {
  const filteredTasks = search
    ? tasks.filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase()),
      )
    : [];

  return (
    <>
      <div className="max-w-2xl mx-auto mt-8 bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4 border-b pb-2">
          Your Tasks
        </h2>

        <TaskForm addTask={addTask} />

        <TaskList
          tasks={tasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      </div>

      <div className="bg-white  min-h-60 w-[22%] absolute top-22  left-290 flex flex-col rounded-2xl">
        {filteredTasks.map((task, i) => {
          return (
            <div
              key={i}
              className="bg-gray-200 max-h-60 w-full flex  justify-start m-2 p-3 rounded-2xl "
            >
              <span className={task.completed ? "line-through" : ""}>
                {task.title}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllTasks;
