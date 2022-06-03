import React from "react";
import './TodoList.css';

function TodoList(props) {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
            {props.countTodos === 0 ? <p className="TodoList-alert">No se han encontrado Todo's</p> : ''}
        </section>
    )
}

export { TodoList }