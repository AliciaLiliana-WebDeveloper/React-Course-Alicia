import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TaskContext);

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
      />
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.text}
      </span>
      <button onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}>
        Eliminar
      </button>
    </li>
  );
};

export default TaskItem;