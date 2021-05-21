import React from 'react';

export const ControlPanel = ({
  leftTasksNumber,
  setCompleteAll,
  clearAllCompleted,
  handlerSetFilterStatus,
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
