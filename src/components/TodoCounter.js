

function TodoCounter({ completed, total }) {
    return (
        <h1>
            You Completed {completed} of {total} tasks
        </h1>
    );
}

export { TodoCounter };