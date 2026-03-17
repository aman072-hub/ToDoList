import React, { useState } from "react";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHnadler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title }]);
    console.log(title);
    setTitle("");
    console.log(mainTask);
  };

  const deletehandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i,1);
    setMainTask(copytask)
  };
  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex justify-between mb-4">
          <div className="flex justify-between w-2/3">
            <h3 className="ml-5">{t.title}</h3>
            <button
              onClick={deletehandler}
              className="bg-red-700 p-2 text-white rounded"
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }
  return (
    <>
      <form onSubmit={submitHnadler}>
        <input
          type="text"
          placeholder="Enter task here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="text-xl px-4 py-2 border-2 border-black rounded-2xl"
        />

        <button className="bg-black text-white px-2 py-2 tetx-xl font-semibold rounded m-4">
          Add Task
        </button>
      </form>

      <div className="bg-blue-600 text-white p-8">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};
export default AddTask;
