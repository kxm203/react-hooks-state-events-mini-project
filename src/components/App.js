import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
function App() {
  const [tasks, setTasks] = useState([...TASKS]);

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task.text !== taskToDelete.text));
  };
  const handleCategoryChange = (category) => {
    const filteredTasks = category === "All" ? TASKS : TASKS.filter((task) => task.category === category);
    setTasks(filteredTasks);
  }
  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryChange={handleCategoryChange} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={ tasks } onDelete={deleteTask} />
    </div>
  );
}

export default App;
