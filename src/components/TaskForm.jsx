//TaskForm.jsx se encarga de la parte de crear las entradas de texto.
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState(""); // "useState" lo estoy usando para crear un string vacio "title" que voy a poder modificar usando la funcion "setTitle".
  const [description, setDescription] = useState(""); // "useState" lo estoy usando para crear un string vacio "description" que voy a poder modificar usando la funcion "setDescription".
  const { createTask } = useContext(TaskContext); // con "useContext" estoy llamando a la funcion "createTask" del archivo "TaskContext.jsx"

  const handleSubmit = (e) => { //"handleSubmit" es la funcion que me permite determinar como funciona el formulario
    e.preventDefault(); // "e.preventDefault" me permite prever el comportamiento por defecto de "<form>" que es resetearse cada ve< que hago un "Submit"
    createTask({ // Cuando se produce un evento "submit" setTitle y setDescription han guardado los valores para pasar al "createTask {title, description} " 
      title,
      description,
    });
    setTitle("");        //tanto "setTitle" como "setDescription" estan siendo reseteadas para la siguiente llamada a la funcion .
    setDescription("");
  };
                                                                              //"onSubmit" va a ejecutarla funcion "handleSubmit" cuando el formulario sea enviado
  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit} > 
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)} // cuando tenga un cambio este sera guaardado en "setTitle" 
          value={title}  // este "value" simplemente esta cojiendo "title" como valor, lo que me permite dejar el input vacio una vez se a ejecutado el evento "submit o handleSumit" porque al final de esa funcion los valores dentro de "title y descripotion" se limpian.
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description} // este "value" simplemente esta cojiendo "title" como valor, lo que me permite dejar el input vacio una vez se a ejecutado el evento "submit o handleSumit" porque al final de esa funcion los valores dentro de "title y descripotion" se limpian.
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
