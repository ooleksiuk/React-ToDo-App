import React from 'react';
import './TodoItem.css';

const TodoItem = ({ text, todo, handlerDelete, handlerComplete }) => {
  return (
    <div className="todo">
      <button className="complete-btn" onClick={() => handlerComplete(todo.id)}>
        <span className="fa-stack">
          <i className="far fa-circle fa-stack-2x"></i>
          {todo.completed ? <i className="fas fa-check fa-stack-1x"></i> : null}
        </span>
      </button>
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {text}
      </li>
      <button
        className="trash-btn"
        id={todo.id}
        onClick={() => handlerDelete(todo.id)}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default TodoItem;
