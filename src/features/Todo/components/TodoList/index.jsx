import React from "react";
import TodoItem from "../TodoItem";
import classname from "classname";
import "./style.scss";
function TodoList({ todoList, todoClink }) {
  const handertodoclink = (todo, idx) => {
    if (!todoClink) return;
    return todoClink(todo, idx);
  };
  return (
    <ul className="todolist">
      {todoList.map((todo, idx) => (
        <li
          className={classname("todoitem", {
            completed: todo.status === "completed",
          })}
          key={todo.id}
          onClick={() => handertodoclink(todo, idx)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
