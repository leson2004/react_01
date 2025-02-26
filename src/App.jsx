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
    const newTodo = {
      id: randomIntFormInterval(0, 10000),
      name: name,
    };
    return setTodoList([...todoList, newTodo]);
    //alert(`ten cua ban la :${name}`);
  };
  const randomIntFormInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
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
