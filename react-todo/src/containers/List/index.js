import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { InputForm } from '../../components/InputForm/index';
import { TodoList } from '../../components/TodoList/index';
import { ControlPanel } from '../../components/ControlPanel/index';

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
  const [clearCompletedStatus, setClearCompleted] = useState('false');

  // * use effect hooks*
  // this function runs every time todo value changes
  useEffect(() => {
    console.log('use effect: FILTER list');
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
    filterHandler();
  }, [todos, filterStatus]);

  const test = useMemo(() => {
    switch (filterStatus) {
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'uncompleted':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  }, [todos, filterStatus]);

  // this function runs every time completeAll value changes
  useEffect(() => {
    console.log('use effect: COMPLETE ALL');
    const completeAllHandler = () => {
      setTodos(
        filteredTodos.map((todo) => {
          return todo.completed
            ? todo
            : { ...todo, completed: !todo.completed };
        })
      );
    };
    completeAllHandler();
  }, [completeAll]);

  // this function runs every time completeAll value changes
  useEffect(() => {
    console.log('use effect: DELETE ALL');
    const deleteAllHandler = () => {
      setTodos(filteredTodos.filter((todo) => !todo.completed));
    };
    deleteAllHandler();
  }, [clearCompletedStatus]);

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
          filteredTodos={test}
          setFilteredTodos={setFilteredTodos}
        />
        <ControlPanel
          setFilterStatus={setFilterStatus}
          todos={todos}
          setTodos={setTodos}
          completeAll={completeAll}
          setCompleteAll={setCompleteAll}
          clearCompletedStatus={clearCompletedStatus}
          setClearCompleted={setClearCompleted}
          filterStatus={filterStatus}
        />
      </div>
    </div>
  );
};

export default List;
