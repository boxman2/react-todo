import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Done = ({ user, state }) => {
  const { setTodos } = useContext(ThemeContext);
  let { isDone, title, body, id } = user;
  const deleteDone = (num) => {
    setTodos((item) => item.filter((user) => num !== user.id));
  };

  const completeDone = (num) => {
    setTodos((item) =>
      item.map((user) =>
        user.id === num ? { ...user, isDone: !user.isDone } : user
      )
    );
  };
  return (
    <div className={isDone ? "box red" : "box"}>
      <h2>{title}</h2>
      <div>{body}</div>
      <div className="buttons">
        <button
          className="delete-button"
          onClick={() => {
            deleteDone(id);
          }}
        >
          삭제하기
        </button>
        <button
          className="success-button"
          onClick={() => {
            completeDone(id);
          }}
        >
          {state}
        </button>
      </div>
    </div>
  );
};

export default Done;
