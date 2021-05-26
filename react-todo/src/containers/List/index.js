import { useState, useMemo } from 'react';
import { InputForm } from '../../components/InputForm';
import { TodoList } from '../../components/TodoList';
import { ControlPanel } from '../../components/ControlPanel';
import { addTodo, changeStatus, deleteTodo } from '../../store/list/actions';
import { changeFilter } from '../../store/controPanel/actions';
import { useDispatch, useSelector } from 'react-redux';

import './index.css';

const List = () => {
  // *  Redux *
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list.list);
  const filterStatus = useSelector((state) => state.controlPanel.status.name);
  // console.log('листы', list);

  // !!!!

  // * State values *
  // input - text value of the input (use it as props)
  const [inputText, setInputText] = useState('');

  const filteredList = useMemo(() => {
    switch (filterStatus) {
      case 'completed':
        return list.filter((todo) => todo.completed);
      case 'uncompleted':
        return list.filter((todo) => !todo.completed);
      default:
        return list;
    }
  }, [list, filterStatus]);

  // * Handlers *

  const handlerAddTodo = () => {
    dispatch(addTodo({ text: inputText, completed: false }));
    setInputText('');
  };

  const handlerDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handlerComplete = (ids) => {
    console.log('Complete Handler ids:', ids);
    // const ids = list.map((todo) => todo.id);
    console.log('текущий массив индексов', ids);
    dispatch(changeStatus(ids));
  };

  const handlerSetFilterStatus = (name) => {
    dispatch(changeFilter(name));
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
          filteredTodos={filteredList}
          handlerDelete={handlerDelete}
          handlerComplete={handlerComplete}
        />
        {!!list.length && (
          <ControlPanel
            leftTasks={list.filter((todo) => !todo.completed)}
            setCompleteAll={handlerComplete}
            clearAllCompleted={handlerDelete}
            handlerSetFilterStatus={handlerSetFilterStatus}
            hasAnyCompleted={!!list.filter((todo) => todo.completed).length}
          />
        )}
      </div>
    </div>
  );
};

export default List;
