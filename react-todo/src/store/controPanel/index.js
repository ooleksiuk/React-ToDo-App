import { CHANGE_STATUS } from './constants';

const initialState = { status: { name: 'All', id: 0 } };

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    // const handlerCompleteAll = () => {
    //   setTodos(
    //     todos.map((todo) =>
    //       todo.completed ? todo : { ...todo, completed: !todo.completed }
    //     )
    //   );
    // };

    case CHANGE_STATUS:
      return state;

    default:
      return state;
  }
}
