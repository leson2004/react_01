import { Space, Table, Tag } from "antd";

const UserTable = (props) => {
  const { addUserData } = props;
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

  return <Table columns={columns} dataSource={addUserData} rowKey={"_id"} />;
};
export default UserTable;
