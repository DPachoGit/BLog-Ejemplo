//TaskContext.jsx me permite crear elementos accesibles para todo lo demas que esten por devajode el.
import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task"; // Aqui combio el nombre del array dentro del archivo "task.js" para no tener comflictos con la funcion que tiene el mismo nombre usando "as".

export const TaskContext = createContext(); // "TaskContext" es el objeto que almacena los datos.

export function TaskContextProvider(props) {  // "TaskContextProvider" es el componente que engloba al resto de componentes.
  const [tasks, setTasks] = useState([]); // "useState" lo estoy usando para crear un array vacio "tasks" que voy a poder modificar usando la funcion "setTasks".

  function createTask(task) { // "createTask" esta modificando setTasks. Coje las tasks existentes "...tasks" y les añade a ese array el nuevo objeto task que sea creado.
    setTasks([
      ...tasks,{
      title: task.title,
        id: tasks.length,  // la nueva task que se va a crear usa la posicion en el array para determinar el id.
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId)); // "deleteTask" esta comparando ids y si coincide hace ".filter" para sacarla del array.
  }

  useEffect(() => {    // useEffect es una funcion que se ejecuta cundo se carga el componente "TaskContextProvider".
    setTasks(data);  // Dentro de la funcion del useEffect le estoy pasando el array de objetos en el archivo "task.js" a la variable "tasks".
  }, []); //Este array vacio indica que esta funcion solo se va a ejecutar una vez. 

  return (
    <TaskContext.Provider // "TaskContext.Provider" hace que pueda usar los componentes y la array que he creado en "TaskContextProvider".
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}  
    </TaskContext.Provider> // "{props.children}" permite a otros componentes usar los componentes children de "TaskContext".
  );
}
