import './TodoCounter.css';

function TodoCounter({ completed, total }) {
    return (

        total === completed ? 

        <h1 className='TodoCounter'>Congratulations, you completed all the tasks!!</h1>

        :

        <h1 className="TodoCounter">
            You Completed <span>{completed}</span> of <span>{total}</span> TODOs
        </h1>
    );
}

export { TodoCounter };