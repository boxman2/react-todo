import { useContext } from "react";
import Done from "../components/Done";
import { ThemeContext } from "../context/ThemeContext";

const Body = () => {
  const { todos } = useContext(ThemeContext);

  return (
    <section className="todo-list">
      <h2>NOT DONE</h2>
      <div className="not-done">
        {todos.map((a) => {
          let { isDone, id } = a;
          return (
            !isDone && <Done state={"완료"} user={a} key={`title-${id}`} />
          );
        })}
      </div>
      <h2>DONE</h2>
      <div className="done">
        {todos.map((a) => {
          let { isDone, id } = a;
          return isDone && <Done state={"취소"} user={a} key={`title-${id}`} />;
        })}
      </div>
    </section>
  );
};

export default Body;
