import { Space, Table, Tag } from "antd";
import { fetchAllUserAPI } from "../../services/api.service";
import { useState } from "react";

const UserTable = () => {
  const [addUserData, setUserData] = useState([
    { _id: "1", name: "son", age: 18, address: "thanh hóa " },
  ]);
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Son",
      key: "tags",
      dataIndex: "tags",
    },
  ];

  const loadUser = () => {
    console.log("start");
    const res = fetchAllUserAPI();
    setUserData(res.data);
    console.log("end", res);
  };
  loadUser();
  return <Table columns={columns} dataSource={addUserData} rowKey={"_id"} />;
};
export default UserTable;
