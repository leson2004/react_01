import { Space, Table, Tag } from "antd";
import { fetchAllUserAPI } from "../../services/api.service";
import { useEffect, useState } from "react";

const UserTable = () => {
  const [addUserData, setUserData] = useState([]);
  useEffect(() => {
    //console.log("------------check useeffect");
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
    },
    {
      title: "Email",
      dataIndex: "email",
    },
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
