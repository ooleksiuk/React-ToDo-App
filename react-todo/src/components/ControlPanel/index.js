import React from 'react';
import './ControlPanel.css';
import { useSelector } from 'react-redux';

export const ControlPanel = ({
  leftTasks,
  setCompleteAll,
  clearAllCompleted,
  handlerSetFilterStatus,
  hasAnyCompleted,
}) => {
  return (
    <div className="control-panel">
      <span
        className="control-complete-all"
        id="completeAll"
        onClick={() => setCompleteAll(leftTasks.map((todo) => todo.id))}
      >
        {leftTasks.length} tasks left
      </span>
      <form
        className="control-radios"
        name="radios"
        onChange={(e) => handlerSetFilterStatus(e.target.value)}
      >
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
      </form>
      {hasAnyCompleted && (
        <span
          className="control-clear-completed"
          id="clearAll"
          onClick={(e) => clearAllCompleted(e.target.id)}
        >
          Clear completed
        </span>
      )}
    </div>
  );
};
