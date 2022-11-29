import React from "react";

const InputArea = ({ setUser, users, count, setCount }) => {
  const add = (e) => {
    e.preventDefault();

    console.log(e); //시네틱이벤트 객체 자체의모형
    console.log(e.target);
    console.log(e.target[0]);
    console.log(e.target[0].value);

    let a = e.target[0].value;
    let b = e.target[1].value;

    if (a !== "") {
      setUser([
        ...users,
        {
          id: count,
          title: a,
          body: b,
          isDone: false,
        },
      ]);
      setCount(count + 1);
      e.target[0].value = "";
      e.target[1].value = "";
    }
  };
  return (
    <form className="input-area" onSubmit={add}>
      <div className="input-detail">
        <div>제목</div>
        <input type="text" className="title-input"></input>
        <div>내용</div>
        <input type="text" className="body-input"></input>
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
};

export default InputArea;
