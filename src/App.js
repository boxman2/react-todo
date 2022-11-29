import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Done from "./components/Done";
import InputArea from "./components/InputArea";

//모듈화 ,재사용 용이하게
//직관성떨어지고 협업하기 어렵다

function App() {
  const [users, setUser] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <div className="layout">
      <Navbar />
      <InputArea
        setUser={setUser}
        users={users}
        setCount={setCount}
        count={count}
      />
      <section className="todo-list">
        <h2>NOT DONE</h2>
        <div className="not-done">
          {users.map((a) => {
            let { isDone, id } = a;
            return !isDone ? (
              <Done state={"완료"} user={a} setUser={setUser} key={id} />
            ) : null;
          })}
        </div>
        <h2>DONE</h2>
        <div className="done">
          {users.map((a) => {
            let { isDone, id } = a;
            return isDone ? (
              <Done state={"취소"} user={a} setUser={setUser} key={id} />
            ) : null;
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
