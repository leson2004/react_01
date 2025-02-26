const TodoData = (props) => {
  var { todoList } = props; // khi khai báo key = name1 , thì khi dùng object destructuring cx phải là 'name1' thì mới nhận được
  // hoặc dùng {name: name1} thì mới có thể gán và lấy đc giá trị
  return (
    <>
      <div className="todo_data">
        {todoList.map((data) => {
          return (
            <div className="todo_data_new">
              <div>{data.name} </div>
              <button>delete</button>
            </div>
          );
        })}
        <div>{JSON.stringify(props.todoList)}</div>
      </div>
    </>
  );
};
export default TodoData;
