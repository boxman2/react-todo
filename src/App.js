import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Done from "./components/Done";
import InputArea from "./components/InputArea";

const item = JSON.parse(localStorage.getItem("todo"));
const number = localStorage.getItem("number");
console.log("사이드이펙트");

//a 와 b로 나눌 필요가있는가?
function a() {
  console.log("a");
  return item || [];
}
function b() {
  return number || 0;
}
function App() {
  console.log("App컴포넌트 맨위");
  const [todos, setTodos] = useState(a);
  const [count, setCount] = useState(b);

  useEffect(() => {
    console.log("유즈이펙트");
    localStorage.setItem("todo", JSON.stringify(todos));
    localStorage.setItem("number", count);
  }, [todos]);

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
              <Done
                state={"완료"}
                user={a}
                setTodos={setTodos}
                key={`title+${id}`}
              />
            ) : null;
          })}
        </div>
        <h2>DONE</h2>
        <div className="done">
          {todos.map((a) => {
            let { isDone, id } = a;
            return isDone ? (
              <Done
                state={"취소"}
                user={a}
                setTodos={setTodos}
                key={`title+${id}`}
              />
            ) : null;
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
