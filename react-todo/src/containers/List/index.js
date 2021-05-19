import React from 'react';
import { useState } from 'react';

const List = () => {
  const [inputText, setInputText] = useState('');

  return (
    <div className="main-container">
      <header>
        <h1> Your todo list </h1>
      </header>
      <div className="todo-list-container">
        <InputForm />
      </div>
    </div>
  );
};

const InputForm = () => {
  // Form
  // const inputTextHandler = (e) => {
  //   console.log(e);
  // };

  return (
    <form className="todo-form">
      <input type="text" className="todo-input"></input>
    </form>
  );
};

export default List;
