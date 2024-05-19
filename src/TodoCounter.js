import './styles/TodoCounter.css'

export const TodoCounter = ({total, completed}) => {
  const mensaje = ()=>{
    if(total === 0){
      return 'No hay tareas cargadas'
    } else if (completed === total){
      return 'Todas las tareas fueron completadas'
    } else
    return 'Has completado '+completed+' de '+total+' TODOS'
  }

  return (
    <h1 className="TodoCounter">
        {mensaje()}
    </h1>
  )
}