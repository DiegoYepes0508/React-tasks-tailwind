import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskList() {
  const { tasks } = useContext(TaskContext);
  if (tasks.length == 0) {
    return <h1 className="text-white text-2xl text-center font-bold">No hay tareas aun</h1>;
  }

  return (
    <div className="grid grid-cols-3 gap-2  text-white ">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
