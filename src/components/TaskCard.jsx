import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { toast, Toaster } from "react-hot-toast";
function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-zinc-800 p-4 rounded">
      <h1 className="text-xl font-bold ">{task.title}</h1>
      <p className="text-sm">{task.description}</p>
      <button
        className="bg-red-600 hover:bg-red-500 px-2 py-1 rounded mt-2"
        onClick={() => deleteTask(task.id) || toast.success("Tarea Eliminada")}
      >
        Eliminar tarea{" "}
      </button>
      <Toaster />
    </div>
  );
}

export default TaskCard;
