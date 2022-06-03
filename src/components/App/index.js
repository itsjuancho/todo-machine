import React, { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   {
//     text: "Darle comida a Lana",
//     completed: true
//   },
//   {
//     text: "Crear CV",
//     completed: false
//   },
//   {
//     text: "Buscar info de Java",
//     completed: false
//   },
//   {
//     text: "Ir al concierto de Rels B",
//     completed: false
//   }
// ];

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [valueSearch, setValueSearch] = useState('');

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
    <AppUI 
      completedTodos={completedTodos} 
      totalTodos={totalTodos}
      valueSearch={valueSearch}
      setValueSearch={setValueSearch}
      searchedTodos={searchedTodos}
      toggleCompleteTodo={toggleCompleteTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
