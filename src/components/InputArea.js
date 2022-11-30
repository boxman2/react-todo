import React, { useState } from "react";

const InputArea = ({ setTodos, todos, count, setCount }) => {
  const [input, setInput] = useState({ title: "", body: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value }); //이거너무좋다
  };

  const add = (e) => {
    e.preventDefault();
    const { title, body } = input;
    if (title !== "" && body !== "") {
      setTodos([
        ...todos,
        {
          ...input,
          id: count,
          isDone: false,
        },
      ]);
      setCount(count + 1);
      setInput({ title: "", body: "" });
    }
  };
  return (
    <form className="input-area" onSubmit={add}>
      <div className="input-detail">
        <div>제목</div>
        <input
          type="text"
          className="title-input"
          onChange={handleInput}
          value={input.title}
          name="title"
        ></input>
        <div>내용</div>
        <input
          type="text"
          className="body-input"
          onChange={handleInput}
          value={input.body}
          name="body"
        ></input>
      </div>
      <button className="add-button">추가하기</button>{" "}
    </form>
  );
};

export default InputArea;
