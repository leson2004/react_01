const TodoNew = (props) => {
  var { newFunction } = props;
  var name = "Le Van Son";
  return (
    <div className="todo_new">
      <input type="text" />
      <button onClick={newFunction(name)}>add</button>
    </div>
  );
};
export default TodoNew;
