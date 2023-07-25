//TaskCard.jsx es el componente que me permite mostrar las tareas de forma individual.
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext); // con "useContext" estoy llamando a la funcion "deleteTask" del archivo "TaskContext.jsx"

  return (   //en este return tengo "title y description" con el prop "task" para que cuando el ".map" recorra el array cree tareas con los valores correspondiente a  cada objeto
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.title}</p>
      <button
        className="bg-red-400 px-2 py-1 rounded-md mt-4 hover:bg-red-500 m-1"
        onClick={() => deleteTask(task.id)} //este boton envia la id de una tarea especifica a la funcion "deleteTask" y en el archivo "TaskContext.jsx" es filtrada con una comparacion.
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;
