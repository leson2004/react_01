import {
  Input,
  Button,
  notification,
  message,
  Descriptions,
  Modal,
} from "antd";
import { useState } from "react";
import axios from "axios";
import { createUserApi } from "../../services/api.service";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickBtn = async () => {
    const res = await createUserApi(fullName, email, password, phone);
    //console.log("check res:", res);
    if (res.data) {
      notification.success({
        message: " create user",
        description: "Tạo user thành công ",
      });
      resetAndCloseModel();
    } else {
      notification.error({
        message: "error create user ",
        description: JSON.stringify(res.message),
      });
    }
  };
  const resetAndCloseModel = () => {
    setIsModalOpen(false);
    setFullName("");
    setEmail("");
    setPassWord("");
    setPhoneNumber("");
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Table User</h3>
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          CREATE USER
        </Button>
      </div>
      <Modal
        title="Create User"
        open={isModalOpen}
        onOk={() => {
          handleClickBtn();
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        okText="CREATE"
      >
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
          <Input.Password
            onChange={(event) => setPassWord(event.target.value)}
          />
        </div>
        <div>
          <span>Phone Number </span>
          <Input onChange={(event) => setPhoneNumber(event.target.value)} />
        </div>
      </Modal>
    </div>
  );
};
export default UserForm;
