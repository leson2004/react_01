const TodoData = (props) => {
  var { name1, age } = props; // khi khai báo key = name1 , thì khi dùng object destructuring cx phải là 'name1' thì mới nhận được
  // hoặc dùng {name: name1} thì mới có thể gán và lấy đc giá trị
  return (
    <>
      <div className="todo_data">
        <div>Learning React with {name1} </div>
        <div>Learning JS</div>
      </div>
    </>
  );
};
export default TodoData;
