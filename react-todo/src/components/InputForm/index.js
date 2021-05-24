import React from 'react';
import './InputForm.css';

export const InputForm = ({ setInputText, inputText, handlerAddTodo }) => {
  // * Handlers *
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const onKeyPress = (e) => {
    // prevent empty input
    if (e.key !== 'Enter' || !e.target.value) return;
    handlerAddTodo();
  };

  return (
    <div className="todo-form">
      <input
        value={inputText}
        onChange={inputTextHandler}
        onKeyPress={onKeyPress}
        type="text"
        className="todo-input"
        placeholder="Enter your task name here"
      />
    </div>
  );
};
