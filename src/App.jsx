import "./components/todo/todo_style.css";
import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
import asset_reactlogo from "./assets/react.svg";
function App() {
  return (
    <>
      <div className="todo_container">
        <div className="todo_title">Todo List</div>
        <TodoNew />
        <TodoData />
        <img src={asset_reactlogo} className="logo" />
      </div>
    </>
  );
}

export default App;
