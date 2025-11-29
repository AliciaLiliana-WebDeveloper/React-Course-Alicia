import { useState, useContext, useRef, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const { dispatch } = useContext(TaskContext);
  const [text, setText] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus(); // enfoque automático
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: "ADD_TASK", payload: text });
    setText("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Añadir tarea..."
      />
      <button type="submit">Añadir</button>
    </form>
  );
};

export default TaskForm;