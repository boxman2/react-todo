import React from "react";

const InputArea = ({ setUser, users, count, setCount }) => {
  const add = () => {
    if (document.querySelector(".title-input") !== "") {
      setUser([
        ...users,
        {
          id: count,
          title: document.querySelector(".title-input").value,
          body: document.querySelector(".body-input").value,
          isDone: false,
        },
      ]);
      setCount(count + 1);
      document.querySelector(".title-input").value = "";
      document.querySelector(".body-input").value = "";
    }
  };
  return (
    <section className="input-area">
      <div className="input-detail">
        <div>제목</div>
        <input type="text" className="title-input"></input>
        <div>내용</div>
        <input type="text" className="body-input"></input>
      </div>
      <button onClick={add} className="add-button">
        추가하기
      </button>
    </section>
  );
};

export default InputArea;
