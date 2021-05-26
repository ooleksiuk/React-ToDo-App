import { ADD_TODO, DELETE_TODO, CHANGE_STATUS } from './constants';

export const addTodo = (content) => {
  return {
    type: ADD_TODO,
    payload: content,
  };
};

export const deleteTodo = (ids) => {
  return {
    type: DELETE_TODO,
    payload: ids,
  };
};

export const changeStatus = (id) => {
  return {
    type: CHANGE_STATUS,
    payload: id,
  };
};
