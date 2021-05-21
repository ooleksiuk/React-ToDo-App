import { TodoItem } from '../../components/TodoItem';
import React from 'react';

export const TodoList = ({
  todos,
  setTodos,
  filteredTodos,
  setFilteredTodos,
}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            status={todo.completed}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            setFilteredTodos={setFilteredTodos}
          />
        ))}
      </ul>
    </div>
  );
};
