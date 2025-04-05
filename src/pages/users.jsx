//import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from "../services/api.service";
import { useEffect, useState } from "react";
import UserTable from "../components/user/user.table";
import UserForm from "../components/user/user.form";

const UsersPage = () => {
  const [addUserData, setUserData] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadUser();
  }, [current, pageSize]);
  const loadUser = async () => {
    const res = await fetchAllUserAPI(current, pageSize);
    if (res.data) {
      setUserData(res.data.result);
      setCurrent(res.data.meta.current);
      setPageSize(res.data.meta.pageSize);
      setTotal(res.data.meta.total);
    }
  };

  return (
    <div>
      <UserForm loadUser={loadUser} />
      <UserTable
        addUserData={addUserData}
        loadUser={loadUser}
        current={current}
        pageSize={pageSize}
        total={total}
        setCurrent={setCurrent}
        setPageSize={setPageSize}
        setTotal={setTotal}
      />
    </div>
  );
};
export default UsersPage;
