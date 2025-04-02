import { useEffect } from "react";
import { Drawer } from "antd";
import { useState } from "react";
const ViewUser = (props) => {
  const { open, setOpen, viewUser } = props;
  const [id, setID] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [phone, setPhoneNumber] = useState("");
  console.log("check view", viewUser);
  useEffect(() => {
    setID(viewUser._id);
    setFullName(viewUser.fullName);
    setEmail(viewUser.email);
    setPhoneNumber(viewUser.phone);
  }, [viewUser]);
  return (
    <>
      <Drawer
        closable
        destroyOnClose
        title={<p>Xem chi tiết User</p>}
        placement="right"
        open={open}
        loading={false}
        onClose={() => setOpen(false)}
      >
        {/* <Button
          type="primary"
          style={{ marginBottom: 16 }}
          onClick={showLoading}
        > */}
        {/* Reload
        </Button> */}
        <p>ID : {id}</p>
        <p>FullName :{fullName} </p>
        <p>Email :{email} </p>
        <p>Phone :{phone} </p>
      </Drawer>
    </>
  );
};

export default ViewUser;
