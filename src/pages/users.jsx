//import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from "../services/api.service";
import { useEffect, useState } from "react";
import UserTable from "../components/user/user.table";
import UserForm from "../components/user/user.form";

const UsersPage = () => {
  const [addUserData, setUserData] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await fetchAllUserAPI();
    setUserData(res.data);
  };
  return (
    <div>
      <UserForm loadUser={loadUser} />
      <UserTable addUserData={addUserData} />
    </div>
  );
};
export default UsersPage;
