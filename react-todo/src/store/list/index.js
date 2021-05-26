import { ADD_TODO, DELETE_TODO, CHANGE_STATUS } from './constants';

const initalState = {
  list: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initalState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const id = state.list.length
        ? state.list[state.list.length - 1].id + 1
        : 0;
      return {
        ...state,
        list: [...state.list, { ...action.payload, id: id }],
      };
    }
    case CHANGE_STATUS: {
      return {
        ...state,
        list: state.list.map((todo) => {
          return action.payload.includes(todo.id)
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo;
        }),
      };
    }

    case DELETE_TODO: {
      if (action.payload === 'clearAll') {
        return {
          ...state,
          list: state.list.filter((todo) => !todo.completed),
        };
      } else {
        return {
          ...state,
          list: state.list.filter((todo) => todo.id !== action.payload),
        };
      }
    }

    default:
      return state;
  }
}
