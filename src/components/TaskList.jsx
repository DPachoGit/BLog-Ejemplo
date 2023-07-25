// TaskList.jsx se encarga de mostar las tareas una vez se han guardado
import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext); //con "useContext" estoy llamando al array de objetos "tasks" del archivo "TaskContext.jsx"

  if (tasks.length === 0) { //este if esta mirando si en la array "tasks" hay algo si no lo hay retornara el texto "No Hay tareas aun"
    return (
      <h1 className="text-white  text-4xl font-bold text-center">
        No Hay tareas aun
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (   // "tasks.map" esta iterando sobre la array "tasts" y esta creando una instancia del componente "TaskCard" por cada objeto "task"
        <TaskCard key={task.id} task={task} /> // La key es igual a la id de cada objeto "task" para que no se generen errores. "task={task}" es un prop que me permite mostrar "title y description" del componente "TaskCard" 
      ))}
    </div>
  );
}

export default TaskList;
