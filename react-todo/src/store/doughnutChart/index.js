import { GET_DATA_START, GET_DATA_SUCCESS } from './constants';

const initalState = {
  data: {},
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initalState, action) {
  switch (action.type) {
    case GET_DATA_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
}
