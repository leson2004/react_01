import { useEffect } from "react";
import { Button, Drawer, Flex, notification } from "antd";
import { useState } from "react";
import FormList from "antd/es/form/FormList";
import { NodeCollapseOutlined } from "@ant-design/icons";
import {
  handleUploadFileAvatar,
  updateAvatar,
} from "../../services/api.service";
const ViewUser = (props) => {
  const { open, setOpen, viewUser, loadUser } = props;
  const [id, setID] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  //console.log("check view", viewUser);
  useEffect(() => {
    setID(viewUser._id);
    setFullName(viewUser.fullName);
    setEmail(viewUser.email);
    setPhoneNumber(viewUser.phone);
  }, [viewUser]);
  const handleClickFile = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(null);
      setPreview(null);
      return;
    }

    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUploadFile = async () => {
    const resUpload = await handleUploadFileAvatar(selectedFile, "avatar");

    if (resUpload.data) {
      const resUpdateAvatar = await updateAvatar(
        viewUser._id,
        viewUser.fullName,
        viewUser.phone,
        resUpload.data.fileUploaded
      );
      if (resUpdateAvatar.data) {
        notification.success({
          message: "Update avatar ",
          description: "cập nhật avatar thành công ",
        });
        closePreView();
        loadUser();
      } else {
        notification.error({
          message: "Update avatar",
          description: JSON.stringify(resUpdateAvatar.message),
        });
      }
    } else {
      //false
      notification.error({
        message: "Upload user ",
        description: JSON.stringify(resUpload.message),
      });
    }
  };
  const closePreView = () => {
    setOpen(false);
    setSelectedFile(null);
    setPreview(null);
  };

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
        <div
          style={{
            height: "150px",
            width: "200px",
            marginTop: "10px",
            border: "1px solid #ccc",
          }}
        >
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
              viewUser.avatar
            }`}
            style={{ height: "100%", width: "100%", objectfit: "contain" }}
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
          <input
            type="file"
            id="upload"
            hidden
            onChange={(event) => {
              handleClickFile(event);
            }}
          />
        </div>

        {preview && (
          <>
            <div
              style={{
                height: "150px",
                width: "200px",
                marginTop: "10px",
                border: "1px solid #ccc",
                marginBottom: "10px",
              }}
            >
              <img
                src={`${preview}`}
                style={{
                  height: "100%",
                  width: "100%",
                  objectfit: "contain",
                }}
              />
            </div>
            <Button
              onClick={() => {
                handleUploadFile();
              }}
            >
              SAVE
            </Button>
          </>
        )}
      </Drawer>
    </>
  );
};

export default ViewUser;
