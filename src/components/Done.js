import React from "react";

const Done = ({ user, setUser, state }) => {
  const deleteDone = (num) => {
    setUser((item) => item.filter((user) => num !== user.id));
  };
  const completeDone = (num) => {
    setUser((item) =>
      item.map((user) =>
        user.id === num ? { ...user, isDone: !user.isDone } : user
      )
    );
  };
  return (
    <div className={user.isDone ? "box red" : "box"}>
      <h2>{user.title}</h2>
      <div>{user.body}</div>
      <div className="buttons">
        <button
          className="delete-button"
          onClick={() => {
            deleteDone(user.id);
          }}
        >
          삭제하기
        </button>
        <button
          className="success-button"
          onClick={() => {
            completeDone(user.id);
          }}
        >
          {state}
        </button>
      </div>
    </div>
  );
};

export default Done;
