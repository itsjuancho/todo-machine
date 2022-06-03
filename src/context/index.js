import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
    const [valueSearch, setValueSearch] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const completedTodos = todos.filter(item => !!item.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (!valueSearch.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = valueSearch.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    const toggleCompleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            valueSearch,
            setValueSearch,
            searchedTodos,
            toggleCompleteTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }