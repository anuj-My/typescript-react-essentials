import type { Task } from "./type";

type ListProps = {
  tasks: Task[];
  toggeTask: ({ id }: { id: string }) => void;
};
const List = ({ tasks, toggeTask }: ListProps) => {
  return (
    <ul className="list">
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <p className="task-text">{task.description}</p>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggeTask({ id: task.id })}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default List;
