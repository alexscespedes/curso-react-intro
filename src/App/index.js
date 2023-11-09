import { React, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import './App.css';
import { AppUI }  from './AppUI.js';


function App() {
  const [todos, saveTodos] = useLocalStorage('ToDos_V1', [])
  const [searchValue, setSearchValue] = useState('');

  const completedToDos = todos.filter(todo => !!todo.completed).length;
  const totalToDos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const seachText = searchValue.toLowerCase();
      return todoText.includes(seachText);
    }
  )


  const doneTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[index].completed = true;
    saveTodos(newTodos)
  }

  const removeTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(index, 1)
    saveTodos(newTodos)
  }

  return (
    <AppUI
    completedToDos={completedToDos} 
    totalToDos={totalToDos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    doneTodo={doneTodo}
    removeTodo={removeTodo}
    />
  );
}

export default App;
