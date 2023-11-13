import { React, createContext, useState} from "react";
import { useLocalStorage } from './useLocalStorage.js';

const TodoContext = createContext();

function TodoProvider({ children }) {
    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error,
        } = useLocalStorage('ToDos_V1', [])
        const [searchValue, setSearchValue] = useState('');
        const [openModal, setOpenModal] = useState(false);
    
        const completedToDos = todos.filter(todo => !!todo.completed).length;
        const totalToDos = todos.length;
    
        const searchedTodos = todos.filter(
            (todo) => {
            const todoText = todo.text.toLowerCase();
            const seachText = searchValue.toLowerCase();
            return todoText.includes(seachText);
            }
        )
        
        const addTodo = (text) => {
            const newTodos = [...todos];
            newTodos.push({
                text,
                completed: false,
            })
            saveTodos(newTodos);
        }
        
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
        <TodoContext.Provider value={{
            loading,
            error,
            completedToDos, 
            totalToDos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            doneTodo,
            removeTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }

{/* <TodoContext.Consumer></TodoContext.Consumer> */}