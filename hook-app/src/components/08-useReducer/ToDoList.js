import React from "react";
import { TodoListItem } from "./TodoListItem";

export const ToDoList = ({ toDos, handleDelete, handleToggle }) => {
  return (
    <ul className="list-group list-group-flush">
      {toDos.map((toDo, i) => (
          <TodoListItem
            key={toDo.id}
            toDo={toDo}
            i={i}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
      ))}
    </ul>
  );
};

