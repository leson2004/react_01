import "./components/todo/todo_style.css";
import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
import asset_reactlogo from "./assets/react.svg";
import { useState } from "react";
function App() {
  // lưu Ý : app() là component cha , nó sẽ kiểm soát được dữ liệu nên khi làm vc với new , sẽ k lấy đc ở hàm con data , nên chúng ta
  // sẽ viết hàm ở cha và truyền lại cho con .
  //có thể truyền useState từ cha sang con
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "luyen react" },
    //{ id: 2, name: "luyen js" },
  ]);
  //props : khai báo các biến để chuyền giá trị từ cha sang con ;
  const name = "son";
  const age = 25;
  const data = {
    sub: "English",
    cost: 50,
  };
  var deleteFunction = (id) => {
    const newTodo = todoList.filter((item) => {
      return item.id != id;
    });
    return setTodoList(newTodo);
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
        {todoList.length > 0 ? (
          <TodoData //name1={name} age1={age} data={data}
            todoList={todoList}
            deleteFunction={deleteFunction}
          />
        ) : (
          <div>
            <img src={asset_reactlogo} className="logo" />
          </div>
        )}
        {/* {todoList.length === 0 || (
          <TodoData name1={name} age1={age} data={data} todoList={todoList} />
        )}
        {todoList.length === 0 && (
          <div>
            <img src={asset_reactlogo} className="logo" />
          </div>
        )} */}
      </div>
    </>
  );
}

export default App;
