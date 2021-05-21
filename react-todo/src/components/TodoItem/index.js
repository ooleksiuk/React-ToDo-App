import React from 'react';

export const TodoItem = ({ text, todo, handlerDelete, handlerComplete }) => {
  return (
    <div className="todo">
      <button className="complete-btn" onClick={() => handlerComplete(todo.id)}>
        <i className="fas for-check"></i>
      </button>
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {text}
      </li>
      <button
        className="trash-btn"
        id={todo.id}
        onClick={() => handlerDelete(todo.id)}
      >
        <i className="fas for-trash"></i>
      </button>
    </div>
  );
};
