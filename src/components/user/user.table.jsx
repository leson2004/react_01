import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Space, Table, Pagination } from "antd";
import { useState } from "react";
import UserUpdate from "./user.update";
import ViewUser from "./view.user.detail";
import DeleteUser from "./delete.user";

const UserTable = (props) => {
  const {
    addUserData,
    loadUser,
    current,
    pageSize,
    total,
    setCurrent,
    setPageSize,
    setTotal,
  } = props;
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isUpdateUserValue, setIsUpdateUserValue] = useState(null);
  const [open, setOpen] = useState(false);
  const [viewUser, setViewUser] = useState("");
  const [deleteUser, setDeleteUser] = useState("");
  const [isOpenPopConFirm, setIsOpenPopConFirm] = useState(false);

  const columns = [
    {
      title: "STT",
      render: (_, record, index) => {
        return <>{index + 1 + (current - 1) * pageSize}</>;
      },
    },
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
  const onChange = (pagination, filters, sorter, extra) => {
    if (pagination && pagination.current) {
      if (+pagination.current != +current) {
        setCurrent(+pagination.current);
      }
    }
    if (pagination && pagination.current) {
      if (+pagination.pageSize != +pageSize) {
        setPageSize(+pagination.pageSize);
      }
    }
    console.log("check________", { pagination, filters, sorter, extra });
  };
  return (
    <>
      <Table
        columns={columns}
        dataSource={addUserData}
        rowKey={"_id"}
        pagination={{
          current: current,
          pageSize: pageSize,
          showSizeChanger: true,
          total: total,

          showTotal: (total, range) => {
            return (
              <div>
                {" "}
                {range[0]}-{range[1]} trên {total} rows
              </div>
            );
          },
        }}
        onChange={onChange}
      />

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
