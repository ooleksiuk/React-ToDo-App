import { CHANGE_FILTER } from './constants';

// const initialState = { status: { name: 'All', id: 0 } };
const initialState = { status: { name: 'all' } };

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return { status: { name: action.payload } };

    default:
      return state;
  }
}
