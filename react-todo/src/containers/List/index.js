import React from 'react';
import { useState, useEffect } from 'react';

const List = () => {
  // * State values *
  // input - text value of the input (use it as props)
  const [inputText, setInputText] = useState('');
  // an array of objects to store Todo's Items
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [completeAll, setCompleteAll] = useState('false');
  // const [completedAll, setCompletedAll] = useState([]);
  const [deleteAll, setDeleteAll] = useState('false');

  // * use effect *
  // this function runs every time todo value changes
  useEffect(() => {
    // console.log('hey');
    filterHandler();
  }, [todos, filterStatus, completeAll]);

  // * use effect *
  // this function runs every time completeAll value changes
  useEffect(() => {
    console.log('Complete all use effect');
    completeAllHandler();
  }, [completeAll]);

  // * Functions *
  const filterHandler = () => {
    switch (filterStatus) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => !todo.completed));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const completeAllHandler = () => {
    setTodos(
      filteredTodos.map((todo) => {
        return todo.completed ? todo : { ...todo, completed: !todo.completed };
      })
    );
  };

  return (
    <div className="main-container">
      <header>
        <h1> Your todo list </h1>
      </header>
      <div className="todo-list-container">
        <InputForm
          setInputText={setInputText}
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
          setFilteredTodos={setFilteredTodos}
        />
        <ControlPanel
          setFilterStatus={setFilterStatus}
          todos={todos}
          setTodos={setTodos}
          completeAll={completeAll}
          setCompleteAll={setCompleteAll}
          deleteAll={deleteAll}
          setDeleteAll={setDeleteAll}
        />
      </div>
    </div>
  );
};

const InputForm = ({ setInputText, inputText, todos, setTodos }) => {
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

const TodoList = ({ todos, setTodos, filteredTodos, setFilteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            status={todo.completed}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            setFilteredTodos={setFilteredTodos}
          />
        ))}
      </ul>
    </div>
  );
};

const TodoItem = ({ text, todos, todo, setTodos }) => {
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

const ControlPanel = ({
  setFilterStatus,
  todos,
  completeAll,
  setCompleteAll,
  deleteAll,
  setDeleteAll,
}) => {
  // * Handlers *
  const statusHandler = (e) => {
    setFilterStatus(e.target.value);
  };

  //   const completeAllHandler = (todos) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       return { ...todo, completed: todo.completed };
  //     })
  //   );
  // };

  const completeAllHandler = (todos) => {
    setCompleteAll(!completeAll);
  };

  // * Functions *
  const countLeftTasks = (todos) => {
    const count = todos.filter((todo) => !todo.completed).length;
    return count;
  };

  return (
    <div className="control-panel">
      <span
        className="control-complete-all"
        onClick={() => setCompleteAll(!completeAll)}
      >
        {countLeftTasks(todos)} tasks left
      </span>
      <form className="control-radios" name="radios" onChange={statusHandler}>
        <input
          type="radio"
          value="all"
          className="control-radio"
          name="radios"
        ></input>
        <input
          type="radio"
          value="uncompleted"
          className="control-radio"
          name="radios"
        ></input>
        <input
          type="radio"
          value="completed"
          className="control-radio"
          name="radios"
        ></input>
      </form>
      <span
        className="control-clear-completed"
        onClick={() => setDeleteAll(!deleteAll)}
      >
        Clear completed
      </span>
    </div>
  );
};

export default List;
