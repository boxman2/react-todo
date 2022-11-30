import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Done from "./components/Done";
import InputArea from "./components/InputArea";

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(todos);
  });

  return (
    <div className="layout">
      <Navbar />
      <InputArea
        setTodos={setTodos}
        todos={todos}
        setCount={setCount}
        count={count}
      />
      <section className="todo-list">
        <h2>NOT DONE</h2>
        <div className="not-done">
          {todos.map((a) => {
            let { isDone, id } = a;
            return !isDone ? (
              <Done state={"완료"} user={a} setTodos={setTodos} key={id} />
            ) : null;
          })}
        </div>
        <h2>DONE</h2>
        <div className="done">
          {todos.map((a) => {
            let { isDone, id } = a;
            return isDone ? (
              <Done state={"취소"} user={a} setTodos={setTodos} key={id} />
            ) : null;
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
