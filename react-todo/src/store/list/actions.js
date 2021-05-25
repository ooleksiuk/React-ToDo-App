import { ADD_TODO, DELETE_TODO, CHANGE_STATUS } from './constants';

export const addTodo = (content) => {
  return {
    type: ADD_TODO,
    payload: content,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const changeStatus = (id, status) => {
  return {
    type: CHANGE_STATUS,
    payload: { id, status },
  };
};
