import React from "react";
import './TodoItem.css';
import { BsXCircleFill, BsFillCheckSquareFill } from "react-icons/bs";

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <BsFillCheckSquareFill 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            />
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <BsXCircleFill 
                className="Icon Icon-delete"
                onClick={props.onDelete}
            />
        </li>
    )
}

export { TodoItem }