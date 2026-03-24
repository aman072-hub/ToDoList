import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  const addTask = (title) => {
    setTasks([...tasks, { title, completed: false }]);
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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout search={search} setSearch={setSearch} />,
      children: [
        { path: "/", element: <HomePage /> },
        {
          path: "/tasks",
          element: (
            <AllTasks
              tasks={tasks}
              addTask={addTask}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
              search={search}
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
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      {/* Show both pages for now */}
    </>
  );
};

export default App;
