import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

// Read initial tasks from localStorage (or default to empty array)
const loadTasks = () => {
  try {
    const saved = localStorage.getItem("todolist-tasks");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const App = () => {
  const [tasks, setTasks] = useState(loadTasks);
  const [search, setSearch] = useState("");

  // Persist tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todolist-tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Now accepts priority and dueDate in addition to title
  const addTask = (title, priority = "Medium", dueDate = "") => {
    setTasks([...tasks, { title, completed: false, priority, dueDate, id: Date.now() }]);
  };

  const toggleComplete = (index) => {
    const copy = [...tasks];
    copy[index].completed = !copy[index].completed;
    setTasks(copy);
  };

  const deleteTask = (index) => {
    const copy = [...tasks];
    copy.splice(index, 1);
    setTasks(copy);
  };

  // Drag-and-drop: replace tasks with the newly reordered array
  const reorderTasks = (newOrder) => {
    setTasks(newOrder);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout search={search} setSearch={setSearch} />,
      children: [
        {
          index: true,
          element: <Navigate to="/tasks" replace />,
        },
        {
          path: "/tasks",
          element: (
            <AllTasks
              tasks={tasks}
              addTask={addTask}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
              search={search}
              reorderTasks={reorderTasks}
            />
          ),
        },
        {
          path: "/completedtasks",
          element: (
            <CompletedTasks
              tasks={tasks}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
              search={search}
            />
          ),
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
