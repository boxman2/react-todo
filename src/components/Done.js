import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

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
      <Link className="link" to={`/${id}`}>
        상세보기{" "}
      </Link>
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
