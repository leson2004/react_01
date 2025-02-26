import { useState } from "react";

const TodoNew = (props) => {
  var { newFunction } = props;
  const [currentValue, setValue] = useState("chua co"); //string: "chua co" là gtri khởi tạo ban đầu .
  //curentValue : giá trị htai của useState .
  //Hàm dùng để cập nhật currentValue . mỗi khi hàm setValue được gọi , currentValue sẽ được cập nhật gtri mới .
  //do vậy , mỗi khi nhập gtri hàm onchange sẽ được gọi , và sẽ callback handleOnchange => setValue sẽ được thực thi => sẽ đc update liên tục
  const handleOnChange = (name) => {
    setValue(name);
  };
  const handleClick = () => {
    newFunction(currentValue);
    //console.log(currentValue);
    // newFunction(data);
  };
  return (
    <>
      {" "}
      <div className="todo_new">
        <input
          type="text"
          onChange={(data) => {
            handleOnChange(data.target.value);
          }}
        />
        <button onClick={handleClick}>add</button>
      </div>
      <div>ten cua ban la :{currentValue}</div>
    </>
  );
};
export default TodoNew;
