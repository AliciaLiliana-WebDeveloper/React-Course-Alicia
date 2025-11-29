import { useState, useEffect } from "react";
import { TaskProvider } from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

const App = () => {
  const [filter, setFilter] = useState("all");

  return (
    <TaskProvider>
      <h1>Lista de Tareas</h1>
      <TaskForm />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList filter={filter} />
    </TaskProvider>
  );
};

export default App;