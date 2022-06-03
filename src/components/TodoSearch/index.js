import React from "react";
import './TodoSearch.css';

function TodoSearch({ valueSearch, setValueSearch }) {
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