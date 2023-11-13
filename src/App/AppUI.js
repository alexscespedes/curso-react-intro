import { React } from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoItem } from '../components/TodoItem';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoButton } from '../components/TodoButton';
import { TodosLoading } from '../components/TodosLoading';
import { TodosError } from '../components/TodosError';
import { EmptyTodos } from '../components/EmptyTodos';
import { TodoContext } from '../context';
import { TodoForm } from '../components/TodoForm'
import { useContext } from 'react';
import { Modal } from '../modal';

function AppUI() {
    const {
        loading,
        error,
        totalToDos,
        searchedTodos,
        doneTodo,
        removeTodo,
        openModal,
        setOpenModal
    } = useContext(TodoContext)

    return (
    <>
        <TodoCounter  />
        <TodoSearch />
            
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

        {openModal && (
            <Modal>
            <TodoForm />
            </Modal>
        )}
    </>
    )
}

export { AppUI };