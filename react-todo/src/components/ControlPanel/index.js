import React from 'react';
import './ControlPanel.css';

export const ControlPanel = ({
  leftTasksNumber,
  setCompleteAll,
  clearAllCompleted,
  handlerSetFilterStatus,
  hasAnyCompleted,
}) => {
  return (
    <div className="control-panel">
      <span className="control-complete-all" onClick={() => setCompleteAll()}>
        {leftTasksNumber} tasks left
      </span>
      <form
        className="control-radios"
        name="radios"
        onChange={handlerSetFilterStatus}
      >
        <input
          type="radio"
          value="all"
          id="all"
          className="control-radio"
          name="radios"
          defaultChecked
        ></input>
        <label for="all">All</label>
        <input
          type="radio"
          value="uncompleted"
          className="control-radio"
          name="radios"
          id="uncompleted"
        ></input>
        <label for="uncompleted">Todo</label>
        <input
          type="radio"
          value="completed"
          className="control-radio"
          name="radios"
          id="completed"
        ></input>
        <label for="completed">Completed</label>
      </form>
      <span
        className={`control-clear-completed ${!hasAnyCompleted && ' hidden'}`}
        onClick={() => clearAllCompleted()}
      >
        Clear completed
      </span>
    </div>
  );
};
