import React from "react";
import { Task } from "./model";
import SingleTask from "./SingleTask";

interface TaskListProps {
  tasko: Task[];
  setTasko: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<TaskListProps> = ({
  tasko,
  setTasko,
}: TaskListProps) => {
  return (
    <div>
      {tasko.map((task) => (
        <SingleTask
          key={task.id}
          task={task}
          tasko={tasko}
          setTasko={setTasko}
        />
      ))}
    </div>
  );
};

export default TaskList;
