import { useState } from "react"


const ToDoList = () => {

  const [tareas, setTareas] = useState([])
  const [nuevaTarea, setNuevaTarea] = useState('')

  const manejarInput = (e) =>{
    setNuevaTarea(e.target.value)
  }

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, nuevaTarea])
    setNuevaTarea('')
    }
    
  }

  const borrarTarea = (index) => {

    const tareasActualizadas = tareas.filter((_, i) => i !== index)
    setTareas(tareasActualizadas)
  }

  return (
    <>
        <div className="container">
            <h1>TODO List</h1>
            <div>
              <input 
              type="text" 
              placeholder="Escribe tu tarea" 
              value={nuevaTarea}
              onChange={manejarInput}
              />
              <button onClick={agregarTarea}>
                Agregar Tarea
              </button>
            </div>
            
            <ol>
              {tareas.map((tarea, index) => {
                return(
                  <li key={index}>
                  <span>{tarea}</span>
                  <button
                  onClick={() => borrarTarea(index)}
                  >Borrar
                  </button>
                </li>
                )
                
                
              })}
            </ol>
           
        </div>
    </>
  )
}

export default ToDoList