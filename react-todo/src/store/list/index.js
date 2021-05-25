import { ADD_TODO, DELETE_TODO, CHANGE_STATUS } from './constants';

const initalState = {
  list: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initalState, action) {
  switch (action.type) {
    case ADD_TODO: {
      //todo
      const id = state.list.length
        ? state.list[state.list.length - 1].id + 1
        : 0;
      // const id = state.list.length || 0;
      console.log('id', id);
      console.log('state.list.length', state.list.length);

      return {
        ...state,
        list: [...state.list, { ...action.payload, id: id }],
      };
    }

    // case STATUS_CHECK: {
    //   switch (action.payload) {
    //     case 'completed':
    //       return state.list.filter((todo) => todo.completed);
    //     case 'uncompleted':
    //       return state.list.filter((todo) => !todo.completed);
    //     default:
    //       return state.list;
    //   }
    // }

    // const handlerComplete = (id) => {
    //   setTodos(
    //     todos.map((todo) =>
    //       todo.id === id ? { ...todo, completed: !todo.completed } : todo
    //     )
    //   );
    // };

    case CHANGE_STATUS: {
      return state.list.list.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    }

    case DELETE_TODO: {
      const test = state.list.filter((todo) => todo.id !== action.payload);
      return {};
    }

    // case DELETE_TODO:
    //   return Object.assign(
    //     {},
    //     state.todos.filter((todo) => todo.id !== action.id)
    //   );

    // state.todos.filter((todo) => todo.id !== action.id);
    // return Object.assign(
    //   {},
    //   { state.todos.filter((todo) => todo.id !== action.id) }
    // );

    default:
      return state;
  }
}
