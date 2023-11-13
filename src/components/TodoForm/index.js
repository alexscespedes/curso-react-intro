import React, { useContext, useState } from "react";
import {TodoContext} from '../../context'
import './TodoForm.css'

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext);
    const [newElement, setNewElement] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newElement)
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewElement(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Write your first ToDo</label>
            <textarea 
            placeholder="Learn React JS"
            value={newElement}
            onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                className="TodoForm-button
                TodoForm-button--cancel"
                onClick={onCancel}
                >Cancel</button>
                <button
                type="submit"
                className="TodoForm-button
                TodoForm-button--add"
                >Add</button>
            </div>
        </form>
    )
}

export {TodoForm}