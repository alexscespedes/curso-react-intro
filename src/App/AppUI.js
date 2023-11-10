import { React } from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoItem } from '../components/TodoItem';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoButton } from '../components/TodoButton';
import { TodosLoading } from '../components/TodosLoading';
import { TodosError } from '../components/TodosError';
import { EmptyTodos } from '../components/EmptyTodos';


function AppUI({
    loading,
    error,
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

        <TodoList>
        {loading && 
        <>
        <TodosLoading />
        <TodosLoading />
        <TodosLoading />
        </>
        }
        {error && <TodosError />}
        {(!loading && totalToDos.length === 0) && <EmptyTodos />}


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