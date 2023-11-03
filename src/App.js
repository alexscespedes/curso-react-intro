import { React, useState } from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoButton } from './components/TodoButton';
import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
  { text: 'Enjoy what you do', completed: true },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos)
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
    setTodos(newTodos);
  }

  const removeTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(index, 1)
    setTodos(newTodos);
  }

  return (
    <>
      <TodoCounter completed={completedToDos} total={totalToDos} />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue} />

      <TodoList
      >
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}
          onComplete={() => doneTodo(todo.text)}
          onRemove={() => removeTodo(todo.text)}
          />
        
        ))}
      </TodoList>

      <TodoButton />
    </>


  );
}

export default App;
