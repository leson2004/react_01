import { Input, notification, Modal } from "antd";
import { useEffect, useState } from "react";
import { updateUserApi } from "../../services/api.service";
const UserUpdate = (props) => {
  const [fullName, setFullName] = useState("");
  const [_id, setID] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const {
    isUpdateModalOpen,
    setIsUpdateModalOpen,
    isUpdateUserValue,
    loadUser,
  } = props;

  useEffect(() => {
    if (isUpdateUserValue) {
      setFullName(isUpdateUserValue.fullName);
      setID(isUpdateUserValue._id);
      setPhoneNumber(isUpdateUserValue.phone);
    }
  }, [isUpdateUserValue]); // nếu để rỗng useeffect  sẽ chạy 1 lần ,
  //  nếu cho isUpdateUservalue vào , thì mỗi lần giá trị  thay đỏi khác với ban đầu thì useEffect sẽ tự động chạy
  const handleClickBtn = async () => {
    const res = await updateUserApi(_id, fullName, phone);
    //console.log("check res:", res);
    if (res.data) {
      notification.success({
        message: " update user",
        description: "Cập nhật user thành công ",
      });
      resetAndCloseModel();
      loadUser();
    } else {
      notification.error({
        message: "error update user ",
        description: JSON.stringify(res.message),
      });
    }
  };
  const resetAndCloseModel = () => {
    setIsUpdateModalOpen(false);
    setFullName("");
    setID("");
    setPhoneNumber("");
  };
  return (
    <div>
      <Modal
        title="Update User"
        open={isUpdateModalOpen}
        onOk={() => {
          handleClickBtn();
        }}
        onCancel={() => {
          setIsUpdateModalOpen(false);
        }}
        okText="UPDATE"
      >
        <div>
          <span>ID</span>
          <Input value={_id} disabled />
        </div>
        <div>
          <span>Full Name</span>
          <Input
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <div>
          <span>Phone Number </span>
          <Input
            value={phone}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
      </Modal>
    </div>
  );
};
export default UserUpdate;
