import { CHANGE_STATUS } from './constants';

export const completeAll = () => {
  return {
    type: CHANGE_STATUS,
    // payload: todos,
  };
};
