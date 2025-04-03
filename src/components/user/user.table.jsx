import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Space, Table } from "antd";
import { useState } from "react";
import UserUpdate from "./user.update";
import ViewUser from "./view.user.detail";
import DeleteUser from "./delete.user";

const UserTable = (props) => {
  const { addUserData, loadUser } = props;
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isUpdateUserValue, setIsUpdateUserValue] = useState(null);
  const [open, setOpen] = useState(false);
  const [viewUser, setViewUser] = useState("");
  const [deleteUser, setDeleteUser] = useState("");
  const [isOpenPopConFirm, setIsOpenPopConFirm] = useState(false);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      render: (_, record) => {
        return (
          <>
            <a
              href="#"
              onClick={() => {
                setOpen(true);
                setViewUser(record);
              }}
            >
              {record._id}
            </a>
          </>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined
            onClick={() => {
              setIsUpdateModalOpen(true);
              setIsUpdateUserValue(record);
            }}
          />

          <DeleteOutlined
            onClick={() => {
              setIsOpenPopConFirm(true);
              setDeleteUser(record);
            }}
          />
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={addUserData} rowKey={"_id"} />
      <UserUpdate
        isUpdateModalOpen={isUpdateModalOpen}
        setIsUpdateModalOpen={setIsUpdateModalOpen}
        isUpdateUserValue={isUpdateUserValue}
        loadUser={loadUser}
      />
      <ViewUser
        setOpen={setOpen}
        open={open}
        viewUser={viewUser}
        loadUser={loadUser}
      />
      <DeleteUser
        isOpenPopConFirm={isOpenPopConFirm}
        deleteUser={deleteUser}
        setDeleteUser={setDeleteUser}
        loadUser={loadUser}
      />
    </>
  );
};
export default UserTable;
