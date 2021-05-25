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
      <form
        className="control-radios"
        name="radios"
        onChange={handlerSetFilterStatus}
      >
        <span className="control-complete-all" onClick={() => setCompleteAll()}>
          {leftTasksNumber} tasks left
        </span>
        <input
          type="radio"
          value="all"
          id="all"
          className="control-radio"
          name="radios"
          defaultChecked
        ></input>
        <label htmlFor="all">All</label>
        <input
          type="radio"
          value="uncompleted"
          className="control-radio"
          name="radios"
          id="uncompleted"
        ></input>
        <label htmlFor="uncompleted">Todo</label>
        <input
          type="radio"
          value="completed"
          className="control-radio"
          name="radios"
          id="completed"
        ></input>
        <label htmlFor="completed">Completed</label>
        {hasAnyCompleted && (
          <span
            className="control-clear-completed"
            onClick={() => clearAllCompleted()}
          >
            Clear completed
          </span>
        )}
      </form>
    </div>
  );
};

/* <span
        className={`control-clear-completed ${!hasAnyCompleted && ' hidden'}`}
        onClick={() => clearAllCompleted()}
      > */
