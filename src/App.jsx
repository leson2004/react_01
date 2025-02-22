import "./components/todo/todo_style.css";
import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
import asset_reactlogo from "./assets/react.svg";
import { useState } from "react";
function App() {
  //có thể truyền useState từ cha sang con
  const [todoList, setTodoList] = useState([
    { id: 1, name: "luyen react" },
    { id: 2, name: "luyen js" },
  ]);
  //props : khai báo các biến để chuyền giá trị từ cha sang con ;
  const name = "son";
  const age = 25;
  const data = {
    sub: "English",
    cost: 50,
  };
  var newFunction = (name) => {
    alert(`xin chao :${name} `);
  };
  return (
    <>
      <div className="todo_container">
        <div className="todo_title">Todo List</div>
        <TodoNew newFunction={newFunction} />
        <TodoData name1={name} age1={age} data={data} todoList={todoList} />
        <img src={asset_reactlogo} className="logo" />
      </div>
    </>
  );
}

export default App;
