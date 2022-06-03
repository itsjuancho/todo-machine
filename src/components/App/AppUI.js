import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI({
    completedTodos,
    totalTodos,
    valueSearch,
    setValueSearch,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo
}) {
    return (
        <React.Fragment>
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <TodoSearch
                valueSearch={valueSearch}
                setValueSearch={setValueSearch}
            />

            <TodoList countTodos={searchedTodos.length}>
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