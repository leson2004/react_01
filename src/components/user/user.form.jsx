import { Input, Button, notification, message, Descriptions } from "antd";
import { useState } from "react";
import axios from "axios";
import { createUserApi } from "../../services/api.service";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [phone, setPhoneNumber] = useState("");

  const handleClickBtn = async () => {
    //  console.log("check_State", { fullName, email, passWord, phoneNumber });

    const res = await createUserApi(fullName, email, password, phone);
    console.log("check res:", res);
    if (res.data) {
      notification.success({
        message: " create user",
        description: "Tạo user thành công ",
      });
    } else {
      notification.error({
        message: "error create user ",
        description: JSON.stringify(res.message),
      });
    }
    console.log(">>>check res :", res.data);

    // return {
    //   fullName: fullName,
    //   email: email,
    //   passWord: passWord,
    //   phoneNumber: phoneNumber,
    // };
  };
  return (
    <div>
      <div>
        <span>Full Name</span>
        <Input onChange={(event) => setFullName(event.target.value)} />
      </div>
      <div>
        <span>Email</span>
        <Input onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div>
        <span>Pass Word </span>
        <Input.Password onChange={(event) => setPassWord(event.target.value)} />
      </div>
      <div>
        <span>Phone Number </span>
        <Input onChange={(event) => setPhoneNumber(event.target.value)} />
      </div>
      <div>
        <Button type="primary" onClick={() => handleClickBtn()}>
          Submit
        </Button>
      </div>
    </div>
  );
};
export default UserForm;
