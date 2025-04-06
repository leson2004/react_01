import { Input, Button, Form, notification } from "antd";
import { createRegisterUser } from "../services/api.service";
import { useNavigate } from "react-router";
const RegisterPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async (events) => {
    const res = await createRegisterUser(
      // phải luôn nhớ await
      events.fullName,
      events.email,
      events.password,
      events.phone
    );
    if (res.data) {
      notification.success({
        message: "add register user",
        description: " tạo người dùng thành công",
      });
      navigate("/login");
    } else {
      notification.error({
        message: "add register user",
        description: JSON.stringify(res.message),
      });
    }
    console.log("check finish", events);
  };
  // add user từ register , và thử lấy các giá trị mà chưa cần submit
  return (
    <div style={{ margin: "50px" }}>
      <Form
        form={form}
        name="basic"
        layout="vertical"
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        // style={{ maxWidth: 600 }}
        // initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        // autoComplete="off"
      >
        <Form.Item
          label="FullName"
          name="fullName"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="PassWord"
          name="password"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              //type: "regexp",
              pattern: new RegExp(/\d+/g),
              message: "Wrong format!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* <button type="submit">Register</button> trong  1 form co name / id , khi submit được kích hoạt sẽ gửi dữ liệu đi */}

        <Button
          type="primary"
          onClick={() => {
            form.submit();
          }}
        >
          Register
        </Button>
      </Form>
    </div>
  );
};
export default RegisterPage;
