import { useEffect } from "react";
import { Drawer, Button, Flex } from "antd";
import { useState } from "react";
import FormList from "antd/es/form/FormList";
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
        <div>
          <p>ID : {id}</p>
          <p>FullName :{fullName} </p>
          <p>Email :{email} </p>
          <p>Phone :{phone} </p>
        </div>
        <div>
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
              viewUser.avatar
            }`}
            height={200}
            width={250}
          />
        </div>
        <div>
          <label
            htmlFor="upload"
            style={{
              display: "Flex",
              width: "fit-content",
              marginTop: "10px",
              padding: "3px 7px",
              background: "orange",
              borderRadius: "3px",
              cursor: "pointer",
            }}
          >
            Upload Image
          </label>
          <input type="file" id="upload" hidden />
        </div>
      </Drawer>
    </>
  );
};

export default ViewUser;
