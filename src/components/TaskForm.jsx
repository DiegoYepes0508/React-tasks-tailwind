import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { toast, Toaster } from "react-hot-toast";

function TaskForm() {
  const { taskNew } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    taskNew({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-gray-800 mb-4 p-10 rounded" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe tu titulo"
          onChange={(e) => setTitle(e.target.value)}
          className="bg-slate-300 p-3 w-full rounded mb-2 "
          value={title}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Escribe tu descripcion"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-300 p-3 w-full rounded"
          value={description}
        ></textarea>
        <button className="bg-indigo-700 text-white px-2 py-1 rounded" onClick={() => toast.success("Tarea creada")}>Guardar</button>
        <Toaster />
      </form>
    </div>
  );
}

export default TaskForm;
