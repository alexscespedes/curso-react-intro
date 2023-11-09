import { React } from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoItem } from '../components/TodoItem';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoButton } from '../components/TodoButton';

function AppUI({
    completedToDos, 
    totalToDos,
    searchValue,
    setSearchValue,
    searchedTodos,
    doneTodo,
    removeTodo
}) {
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
    )
}

export { AppUI };