import { createContext, useReducer, useEffect } from "react";
import { taskReducer, initialState } from "../reducer/taskReducer";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  // Inicializo leyendo desde localStorage
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || initialState;

  const [tasks, dispatch] = useReducer(taskReducer, storedTasks);

  // Guardo en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
