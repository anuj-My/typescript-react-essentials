import { useEffect, useState } from "react";
import { type Task } from "./type";
import Form from "./Form";
import List from "./List";

const loadTasks = () => {
  let storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
};

function updatedStorage(tasks: Task[]): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

const Component = () => {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

  const addTask = (newTasks: Task): void => {
    setTasks([...tasks, newTasks]);
  };

  const toggleTask = ({ id }: { id: string }): void => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      }),
    );
  };

  useEffect(() => {
    updatedStorage(tasks);
  }, [tasks]);

  return (
    <section>
      <Form addTask={addTask} />
      <List tasks={tasks} toggeTask={toggleTask} />
    </section>
  );
};

export default Component;
