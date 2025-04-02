import React from "react";
import { Button, message, notification, Popconfirm } from "antd";
import { deleteUserApi } from "../../services/api.service";
const DeleteUser = (props) => {
  const { isOpenPopConFirm, deleteUser, setDeleteUser, loadUser } = props;
  //   const confirm = (e) => {
  //     console.log(e);
  //     message.success("Click on Yes");
  //   };
  const handleClickDelete = async () => {
    const res = await deleteUserApi(deleteUser._id);

    if (res.data) {
      notification.success({
        message: "Delete User",
        description: "Xóa người dùng thành công ",
      });
      loadUser();
    } else {
      notification.error({
        message: "error create user ",
        description: JSON.stringify(res.message),
      });
    }
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  return (
    <Popconfirm
      placement="right"
      title="Delete the task"
      description="Are you sure to delete this task?"
      open={isOpenPopConFirm}
      onConfirm={handleClickDelete}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    >
      {/* <Button>Delete</Button> */}
    </Popconfirm>
  );
};
export default DeleteUser;
