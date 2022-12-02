import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useParams, useNavigate } from "react-router-dom";

const Aboutpage = () => {
  const { todos } = useContext(ThemeContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const goHomePage = () => {
    navigate("/");
  };
  const [{ title, body }] = todos.filter((item) => item.id === parseInt(id));

  return (
    <div className="detail-box">
      <div className="space-between">
        <div>ID : {id}</div>
        <button onClick={goHomePage}>이전 으로</button>
      </div>
      <h1>{title}</h1>
      <div>{body}</div>
    </div>
  );
};

export default Aboutpage;
