import React, { useState } from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
// import './index.css';

const defaultTodos = [
  {
    text: "Darle comida a Lana",
    completed: true
  },
  {
    text: "Crear CV",
    completed: false
  },
  {
    text: "Buscar info de Java",
    completed: false
  },
  {
    text: "Ir al concierto de Rels B",
    completed: false
  }
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
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
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

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
  );
}

export default App;
