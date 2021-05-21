import React from 'react';

export const TodoItem = ({ text, todos, todo, setTodos }) => {
  // * Events *
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((el) => {
        return el.id === todo.id ? { ...el, completed: !el.completed } : el;
      })
    );
  };

  return (
    <div className="todo">
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas for-check"></i>
      </button>
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {text}
      </li>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas for-trash"></i>
      </button>
    </div>
  );
};
