import React from "react";
import TaskItem from "./TaskItem";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

const TaskList = ({ tasks, toggleComplete, deleteTask, reorderTasks }) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = tasks.findIndex((t) => t.id === active.id);
    const newIndex = tasks.findIndex((t) => t.id === over.id);

    if (oldIndex !== -1 && newIndex !== -1) {
      reorderTasks(arrayMove(tasks, oldIndex, newIndex));
    }
  };

  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center text-gray-400">
        <div className="text-5xl mb-3">📭</div>
        <p className="text-lg font-medium">No tasks here yet!</p>
        <p className="text-sm mt-1">Add a new task to get started.</p>
      </div>
    );
  }

  // Drag-and-drop is only available when reorderTasks is provided (AllTasks page)
  if (reorderTasks) {
    return (
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={tasks.map((t) => t.id)}
          strategy={verticalListSortingStrategy}
        >
          <ul className="space-y-1">
            {tasks.map((task, i) => (
              <TaskItem
                key={task.id}
                task={task}
                index={i}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
              />
            ))}
          </ul>
        </SortableContext>
      </DndContext>
    );
  }

  // Completed tasks page — no drag-and-drop
  return (
    <ul className="space-y-1">
      {tasks.map((task, i) => (
        <TaskItem
          key={task.id ?? i}
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
