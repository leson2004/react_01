import { Space, Table, Tag } from "antd";
import { fetchAllUserAPI } from "../../services/api.service";
import { useEffect, useState } from "react";

const UserTable = () => {
  const [addUserData, setUserData] = useState([
    { _id: "1", fullName: "son", email: "a@gmail.com" },
  ]);
  useEffect(() => {
    console.log("------------check useeffect");
    loadUser();
  }, []);
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Name",
      dataIndex: "fullName",
      // key: "name",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      //key: "age",
    },
    // {
    //   title: "Address",
    //   dataIndex: "address",
    //   key: "address",
    // },
    // {
    //   title: "Son",
    //   key: "tags",
    //   dataIndex: "tags",
    // },
  ];

  const loadUser = async () => {
    // console.log("start");
    const res = await fetchAllUserAPI();
    setUserData(res.data);
    console.log("end", res);
  };

  console.log("check 00000");
  return <Table columns={columns} dataSource={addUserData} rowKey={"_id"} />;
};
export default UserTable;
