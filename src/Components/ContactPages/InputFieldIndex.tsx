import React, { useState } from "react";
import "../../App.css";
import { InputField } from "./InputField";
import { Task } from "./model";
import TaskList from "./TaskList";

export const InputFieldIndex: React.FC = () => {


  const [task, setTask] = useState<string>("");

  const [tasko, setTasko] = useState<Task[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      setTasko([...tasko, { id: Date.now(), task, isDone: false }]);
      setTask("");
      console.log(setTasko);
    }
  };

  return (
    <div className="App">
      <span>Task </span>
      <InputField task={task} setTask={setTask} handleAdd={handleAdd} />
      <TaskList tasko={tasko} setTasko={setTasko} />


    </div>
  );
};
