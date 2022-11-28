import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Done from "./components/Done";
import NotDone from "./components/NotDone";
import InputArea from "./components/InputArea";

function App() {
  const [users, setUser] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(users);
  }, [users]);
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
            return a.isDone === false ? (
              <NotDone user={a} setUser={setUser} key={a.id} />
            ) : null;
          })}
        </div>
        <h2>DONE</h2>
        <div className="done">
          {users.map((a) => {
            return a.isDone === true ? (
              <Done user={a} setUser={setUser} key={a.id} />
            ) : null;
          })}
        </div>
      </section>
    </div>
  );
}

export default App;