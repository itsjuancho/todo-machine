import React, { useContext } from "react";
import { TodoContext } from "../../context";
import './TodoSearch.css';

function TodoSearch() {
    const {valueSearch, setValueSearch} = useContext(TodoContext);

    const onSearchValueChange = (evt) => {
        console.log(evt.target.value);
        setValueSearch(evt.target.value)
    }

    return (
        <input 
            className="TodoSearch" 
            placeholder="Inserte su búsqueda..."
            value={valueSearch}
            onChange={onSearchValueChange}
        />
    )
}

export { TodoSearch }