import React from 'react';

export const ControlPanel = ({
  setFilterStatus,
  todos,
  completeAll,
  setCompleteAll,
  clearCompletedStatus,
  setClearCompleted,
  filterStatus,
  clearAllCompleted,
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

  // const completeAllHandler = (todos) => {
  //   setCompleteAll(!completeAll);
  // };

  // * Functions *
  const countLeftTasks = (todos) => {
    const count = todos.filter((todo) => !todo.completed).length;
    return count;
  };

  return (
    <div className="control-panel">
      <span className="control-complete-all" onClick={() => setCompleteAll()}>
        {countLeftTasks(todos)} tasks left
      </span>
      <form className="control-radios" name="radios" onChange={statusHandler}>
        <input
          type="radio"
          value="all"
          className="control-radio"
          name="radios"
          defaultChecked
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
        onClick={() => clearAllCompleted()}
      >
        Clear completed
      </span>
    </div>
  );
};
