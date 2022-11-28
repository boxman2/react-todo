import React from "react";

const NotDone = ({ user, setUser }) => {
  const deleteDone = (num) => {
    setUser((users) => users.filter((user) => num !== user.id));
  };
  const completeDone = (num) => {
    setUser((users) =>
      users.map((user) =>
        user.id === num ? { ...user, isDone: !user.isDone } : user
      )
    );
  };

  return (
    <div className="box">
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
          완료
        </button>
      </div>
    </div>
  );
};

export default NotDone;
