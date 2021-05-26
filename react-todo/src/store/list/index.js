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

    // const handlerComplete = (id) => {
    //   setTodos(
    //     todos.map((todo) =>
    //       todo.id === id ? { ...todo, completed: !todo.completed } : todo
    //     )
    //   );
    // };

    case CHANGE_STATUS: {
      console.log('изменение статуса id - payload:', action.payload);
      console.log('лист по которому мапимся', state.list);

      const newList = state.list.map((todo) => {
        // console.log(todo);
        // console.log(todo.completed);
        return todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      });

      console.log('change status handler: ', newList);
      return {
        ...state,
        list: [...newList],
      };
    }

    case DELETE_TODO: {
      const newList = state.list.filter((todo) => todo.id !== action.payload);
      console.log('delete handler ', newList);
      return {
        ...state,
        list: [...newList],
      };
    }

    default:
      return state;
  }
}
