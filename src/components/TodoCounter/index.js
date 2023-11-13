import { TodoContext } from '../../context';
import { useContext } from 'react';
import './TodoCounter.css';


function TodoCounter() {
    const {
        completedToDos,
        totalToDos
    } = useContext(TodoContext)

    return (

        totalToDos === completedToDos && totalToDos > 0 ? 

        <h1 className='TodoCounter'>Congratulations, you completed all the tasks!!</h1>

        :

        <h1 className="TodoCounter">
            You Completed <span>{completedToDos}</span> of <span>{totalToDos}</span> TODOs
        </h1>
    );
}

export { TodoCounter };