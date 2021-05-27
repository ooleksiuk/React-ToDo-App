import { CHANGE_FILTER } from './constants';

export const changeFilter = (checkedFilter) => ({
  type: CHANGE_FILTER,
  payload: checkedFilter,
});
