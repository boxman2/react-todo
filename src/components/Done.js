import React from "react";

const Done = ({ user, setUser }) => {
  const deleteDone = (num) => {
    setUser((ㄹ) => ㄹ.filter((user) => num !== user.id));
  };
  const completeDone = (num) => {
    setUser((ㅇ) =>
      ㅇ.map((user) =>
        user.id === num ? { ...user, isDone: !user.isDone } : user
      )
    );
  };
  return (
    <div className="box red">
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
          취소
        </button>
      </div>
    </div>
  );
};

export default Done;
