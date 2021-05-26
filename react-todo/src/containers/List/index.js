import React, { useEffect } from 'react';
import { useState, useMemo } from 'react';
import { InputForm } from '../../components/InputForm';
import { TodoList } from '../../components/TodoList';
import { ControlPanel } from '../../components/ControlPanel';
import {
  addTodo,
  changeStatus,
  deleteTodo,
  statusCheck,
} from '../../store/list/actions';
import { useDispatch, useSelector } from 'react-redux';

import './index.css';

const List = () => {
  // *  Redux *
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list.list);
  const state = useSelector((state) => state);

  // * State values *
  // input - text value of the input (use it as props)
  const [inputText, setInputText] = useState('');
  // an array of objects to store Todo's Items
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [itemId, setItemId] = useState(1);

  const testList = useMemo(() => {
    switch (filterStatus) {
      case 'completed':
        return list.filter((todo) => todo.completed);
      case 'uncompleted':
        return list.filter((todo) => !todo.completed);
      default:
        return list;
    }
  }, [list, filterStatus]);

  // console.log('ffffffffffff', testList.list);

  // * Handlers

  const handlerCompleteAll = () => {
    setTodos(
      todos.map((todo) =>
        todo.completed ? todo : { ...todo, completed: !todo.completed }
      )
    );
  };

  const handlerClearAllCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const handlerAddTodo = () => {
    dispatch(addTodo({ text: inputText, completed: false }));
    setInputText('');
    console.log('list', list);
    console.log('state', state);
  };

  const handlerDelete = (id) => {
    console.log(id);
    dispatch(deleteTodo(id));
    // setTodos(todos.filter((el) => el.id !== id));
  };

  const handlerComplete = (id) => {
    dispatch(changeStatus(id));
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, completed: !todo.completed } : todo
    //   )
    // );
  };

  const handlerSetFilterStatus = (e) => {
    setFilterStatus(e.target.value);
  };

  // * Functions *

  return (
    <div className="main-container">
      <header>
        <h1> Your todo list </h1>
      </header>
      <div className="todo-list-container">
        <InputForm
          setInputText={(e) => setInputText(e)}
          inputText={inputText}
          handlerAddTodo={handlerAddTodo}
        />
        <TodoList
          filteredTodos={testList}
          handlerDelete={handlerDelete}
          handlerComplete={handlerComplete}
        />
        {!!list.length && (
          <ControlPanel
            leftTasksNumber={list.filter((todo) => !todo.completed).length}
            setCompleteAll={handlerCompleteAll}
            clearAllCompleted={handlerClearAllCompleted}
            handlerSetFilterStatus={handlerSetFilterStatus}
            hasAnyCompleted={!!list.filter((todo) => todo.completed).length}
          />
        )}
      </div>
    </div>
  );
};

export default List;
