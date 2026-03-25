import { useState } from "react";
import { type Task } from "./type";

type FormProps = {
  addTask: (newTask: Task) => void;
};

const Form = ({ addTask }: FormProps) => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      alert("please enter a task.");
    }

    const newTask: Task = {
      id: Date.now().toString(),
      description: text,
      isCompleted: false,
    };
    addTask(newTask);

    setText("");
  };
  return (
    <form className="form task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-input"
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default Form;
