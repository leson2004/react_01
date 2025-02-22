import "./style.css";
const MyComponent = () => {
  var ten = "son";

  return (
    <>
      <h1 className="name"> ten toi la Son</h1>
      <h1 style={{ color: "red" }}>Le Van {ten}</h1>
    </>
  );
};
export default MyComponent;
