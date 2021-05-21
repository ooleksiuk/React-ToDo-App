import React from 'react';

export const InputForm = ({
  setInputText,
  inputText,
  todos,
  setTodos,
  handlerAddTodo,
}) => {
  // * Handlers *
  const inputTextHandler = (e) => {
    // store input text value in the state
    setInputText(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div className="todo-form">
      <input
        onChange={inputTextHandler}
        onKeyPress={handlerAddTodo}
        type="text"
        className="todo-input"
        placeholder="Enter your task name here"
      />
    </div>
  );
};
