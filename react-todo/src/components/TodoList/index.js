import { TodoItem } from '../../components/TodoItem';
import React from 'react';

export const TodoList = ({ filteredTodos, handlerDelete, handlerComplete }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            todo={todo}
            handlerDelete={handlerDelete}
            handlerComplete={handlerComplete}
          />
        ))}
      </ul>
    </div>
  );
};
