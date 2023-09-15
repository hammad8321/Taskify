import React, { useState } from "react";
import { Task } from "./model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";
import TaskList from "./TaskList";

type Props = {
  task: Task;
  tasko: Task[];
  setTasko: React.Dispatch<React.SetStateAction<Task[]>>;
};

const SingleTask = ({ task, tasko, setTasko }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.task);

  const handleDone = (id: number) => {
    setTasko(
      tasko.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const handleDelete = (id: number) => {
    setTasko(tasko.filter((task) => task.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: Number) => {
    e.preventDefault();

    setTasko(
      tasko.map((task) => (task.id === id ? { ...task, task: editTask } : task))
    );
    setEdit(false);
  };

  return (
    <form className="task_single" onSubmit={(e) => handleEdit(e, task.id)}>
      {edit ? (
        <input value={editTask} onChange={(e) => setEditTask(e.target.value)} />
      ) : task.isDone ? (
        <s className="tasko_single_text">{task.task}</s>
      ) : (
        <span className="tasko_single_text"> {task.task}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !task.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(task.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(task.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTask;
