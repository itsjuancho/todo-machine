import React, { useContext, useState } from "react";
import { TodoContext } from "../../context";
import './TodoForm.css';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = useState('');
    const { addTodo, setOpenModal } = useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onAdd = (event) => {
        event.preventDefault();
        if (newTodoValue !== "") {
            addTodo(newTodoValue);
            setOpenModal(false);
        } else {
            alert("Al menos rellena un poco el modal...");
        }
    }

    return (
        <form onSubmit={onAdd}>
            <label>Tu tarea</label>
            <input 
                type="text" 
                placeholder="Escribe tu tarea aquí..." 
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button-cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button-add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }