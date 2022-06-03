import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const onClickButton = (msg) => {
        let contains = prompt(msg);
        alert(contains);
    }

    return (
        <button 
            className="CreateTodoButton"
            onClick={() => onClickButton("Has abierto el modal")}
        >
            +
        </button>
    )
}

export { CreateTodoButton }