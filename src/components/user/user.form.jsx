import { Input, Button } from "antd";
const UserForm = () => {
  return (
    <div>
      <div>
        <span>Full Name</span>
        <Input />
      </div>
      <div>
        <span>Email</span>
        <Input />
      </div>
      <div>
        <span>Pass Word </span>
        <Input.Password />
      </div>
      <div>
        <span>Phone Number </span>
        <Input />
      </div>
      <div>
        <Button type="primary">Submit</Button>
      </div>
    </div>
  );
};
export default UserForm;
