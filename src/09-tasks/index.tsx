import { useState } from "react";
import { type Task } from "./type";
import Form from "./Form";
import List from "./List";

// const getTaskFromStorage = () => {
//   let getStorage = localStorage.getItem("tasks");

//   if (getStorage) {
//     getStorage = JSON.parse(getStorage);
//   } else {
//     getStorage = [];
//   }

//   return getStorage;
// };

const Component = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

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
  return (
    <section>
      <Form addTask={addTask} />
      <List tasks={tasks} toggeTask={toggleTask} />
    </section>
  );
};

export default Component;
