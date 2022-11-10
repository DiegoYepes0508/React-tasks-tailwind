import { createContext, useState, useEffect } from "react";

import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function taskNew(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => taskId !== task.id));
  }

  useEffect(() => {
    setTasks(data);
  }, []);
  return (
    <>
      <TaskContext.Provider value={{ tasks, taskNew, deleteTask }}>
        {props.children}
      </TaskContext.Provider>
    </>
  );
}
