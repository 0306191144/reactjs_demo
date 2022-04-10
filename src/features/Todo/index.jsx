import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";

function TodoFeature(props) {
  const initodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "drink",
      status: "completed",
    },
    {
      id: 3,
      title: "jumb",
      status: "new",
    },
  ];

  const [todoList, SettodoList] = useState(initodoList);
  const [show, Setshow] = useState("all");

  const hendershowall = () => {
    Setshow("all");
  };
  const hendershowcomplete = () => {
    Setshow("completed");
  };
  const hendershownew = () => {
    Setshow("new");
  };
  const showfitter = todoList.filter(
    (todo) => show === "all" || show === todo.status
  );

  const handertodolink = (todo, index) => {
    const newtodoList = [...todoList];
    const newtodo = {
      ...newtodoList[index],
      status: newtodoList[index].status === "new" ? "completed" : "new",
    };
    newtodoList[index] = newtodo;
    console.log(newtodoList);
    SettodoList(newtodoList);
  };

  return (
    <div>
      <TodoList todoList={showfitter} todoClink={handertodolink} />

      <div>
        <button className="showall" onClick={hendershowall}>
          All
        </button>
        <button className="showcomplete" onClick={hendershowcomplete}>
          completed
        </button>
        <button className="shownew" onClick={hendershownew}>
          new
        </button>
      </div>
    </div>
  );
}

TodoFeature.propTypes = {};

export default TodoFeature;
