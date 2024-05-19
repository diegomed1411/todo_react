import './App.css';
import { useState } from 'react'
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true},
  { text: 'Tomar curso', completed: false},
  { text: 'Decir la verdad', completed: true},
  { text: 'Cortar con lata', completed: true}
]

function App() {
  const [todos, setTodos] = useState(defaultTodos)
  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length
  const [searchValue, setSearchValue] = useState('')

  const searchedTodos = todos.filter(
    (todo)=>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase()
      return todoText.includes(searchText)
    })

  const completeTodo = (text) =>{
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex,1)
    setTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      
      <TodoList>
        {searchedTodos.map(todo =>(
          <TodoItem 
          key={todo.text}
          text={todo.text} 
          completed={todo.completed}
          onComplete={()=>completeTodo(todo.text)} 
          onDelete={()=>deleteTodo(todo.text)}         
          />
        ))}      
      </TodoList>

      <CreateTodoButton /> 
    </>
  );
}



export default App;
