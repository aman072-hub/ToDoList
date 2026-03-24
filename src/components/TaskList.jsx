// Renders the data on the screen
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  if (tasks.length === 0) {
    return <h2>No Task Available</h2>;
  }

  return (
    <ul className="space-y-3 max-h-72 overflow-x-auto">
      {tasks.map((task, i) => (
        <TaskItem
          key={i}
          task={task}
          index={i}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
