import { CHANGE_FILTER } from './constants';

export const changeFilter = (checkedFilter) => {
  return {
    type: CHANGE_FILTER,
    payload: checkedFilter,
  };
};
