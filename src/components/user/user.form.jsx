import { Input, Button } from "antd";
import { useState } from "react";
import axios from "axios";
const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleClickBtn = () => {
    const URL_BACKEND = "http://localhost:8080/api/v1/user";
    const data = {
      fullname: fullName,
      email: email,
      password: passWord,
      phonenumber: phoneNumber,
    };
    axios.post(URL_BACKEND, data);
    //  console.log("check_State", { fullName, email, passWord, phoneNumber });
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
