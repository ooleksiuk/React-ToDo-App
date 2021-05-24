import React from 'react';
import { useState, useMemo } from 'react';
import { InputForm } from '../../components/InputForm';
import { TodoList } from '../../components/TodoList';
import { ControlPanel } from '../../components/ControlPanel';

import './index.css';

const List = () => {
  // * State values *
  // input - text value of the input (use it as props)
  const [inputText, setInputText] = useState('');
  // an array of objects to store Todo's Items
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [itemId, setItemId] = useState(1);

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
    setTodos([...todos, { text: inputText, completed: false, id: itemId }]);
    setItemId(itemId + 1);
    setInputText('');
  };

  const handlerDelete = (id) => {
    console.log(id);
    setTodos(todos.filter((el) => el.id !== id));
  };

  const handlerComplete = (id) => {
    setTodos(
      todos.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
      )
    );
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
          filteredTodos={test}
          handlerDelete={handlerDelete}
          handlerComplete={handlerComplete}
        />
        {!!todos.length && (
          <ControlPanel
            leftTasksNumber={todos.filter((todo) => !todo.completed).length}
            setCompleteAll={handlerCompleteAll}
            clearAllCompleted={handlerClearAllCompleted}
            handlerSetFilterStatus={handlerSetFilterStatus}
            hasAnyCompleted={!!todos.filter((todo) => todo.completed).length}
          />
        )}
      </div>
    </div>
  );
};

export default List;
