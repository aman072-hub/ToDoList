import React from "react";
import AddTask from "./components/AddTask";

const App = () => {
  return (
    <>
      <h1 className="bg-blue-600 text-white p-4 text-2xl text-center font-semibold">
        To Do List
      </h1>

      <AddTask />
    </>
  );
};

export default App;
