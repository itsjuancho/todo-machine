import React, { useContext } from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../../context";

function AppUI() {
    const { error, loading, searchedTodos, toggleCompleteTodo, deleteTodo } = useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            
            <TodoList 
                countTodos={searchedTodos.length}
            >
                {error && <p>Ha habiado un error al realizar la acción que deseas... :/</p>}
                {loading && <p>Estamos cargando el contenido...</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer TO-DO!</p>}
                {searchedTodos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => toggleCompleteTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
        </React.Fragment>
    )
}

export { AppUI }