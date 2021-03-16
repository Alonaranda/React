import React from "react";

export const TodoListItem = ({toDo, i, handleDelete, handleToggle}) => {
  return (
    <li key={toDo.id} className="list-group-item">
      <p
        className={`${toDo.done && "complete"}`}
        onClick={() => {
          handleToggle(toDo.id);
        }}
      >
        {i + 1}.- {toDo.descripcion}
      </p>
      <button
        className="btn btn-danger"
        onClick={() => {
          handleDelete(toDo.id);
        }}
      >
        Borrar
      </button>
    </li>
  );
};
