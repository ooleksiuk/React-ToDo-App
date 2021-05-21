import React from 'react';

export const InputForm = ({ setInputText, inputText, todos, setTodos }) => {
  // * Handlers *
  const inputTextHandler = (e) => {
    // store input text value in the state
    setInputText(e.target.value);
    // console.log(e.target.value);
  };

  const addTodoHandler = (e) => {
    if (e.key !== 'Enter') return;
    setTodos([
      // if there are some todos in the list already, just pass it together
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);

    // reset input state-value
    setInputText('');
    // reset placeholder
    e.target.value = '';
  };

  return (
    <div className="todo-form">
      <input
        onChange={inputTextHandler}
        onKeyPress={addTodoHandler}
        type="text"
        className="todo-input"
        placeholder="Enter your task name here"
      />
    </div>
  );
};
