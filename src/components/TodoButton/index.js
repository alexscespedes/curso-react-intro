import { useContext } from 'react';
import { TodoContext } from '../../context';
import './TodoButton.css'

function TodoButton() {
    const {
        openModal,
        setOpenModal
    } = useContext(TodoContext);
    return (
        <button className='TodoButton'
        onClick={() => {setOpenModal(!openModal)}}
        >+</button>
    );
}

export { TodoButton };