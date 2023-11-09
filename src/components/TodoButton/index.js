import './TodoButton.css'

function TodoButton() {
    return (
        <button className='TodoButton'
        onClick={() => console.log("CLICK")}
        >+</button>
    );
}

export { TodoButton };