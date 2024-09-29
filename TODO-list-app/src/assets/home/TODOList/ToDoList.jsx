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
    <h1 className="text-center">TODO List</h1>
        <div className="container w-50 bg-primary-subtle border border-primary-subtle rounded-3 pt-3 pb-3">  
            <div className="d-flex justify-content-start align-items-center mb-4 mt-3">
              <input
              className="form-control" 
              type="text" 
              placeholder="Escribe tu tarea" 
              value={nuevaTarea}
              onChange={manejarInput}
              />
              <button 
              className="btn btn-primary mx-2"
              onClick={agregarTarea}>
                Agregar
              </button>
            </div>
            
            
            <ul className="list-group">
              {tareas.map((tarea, index) => {
                return(
                  <>
                  <div className="d-flex justify-content-evenly text-center rounded">
                    <li 
                    className="list-group-item w-75 mb-4"
                    key={index}>
                    {tarea}
                    </li>
                    <button
                    className="btn btn-danger mb-4"
                    onClick={() => borrarTarea(index)}
                    >🚮
                    </button>
                  </div>
                    
                  </>
                
                )
                
                
                
              })}
            </ul>
           
        </div>
    </>
  )
}

export default ToDoList