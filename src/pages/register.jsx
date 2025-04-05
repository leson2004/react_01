import { Input, Button, Form } from "antd";
const RegisterPage = () => {
  const [form] = Form.useForm();
  const onFinish = (events) => {
    console.log("check finish", events);
  };
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
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="PassWord" name="password">
          <Input />
        </Form.Item>
        <Form.Item label="Phone" name="phone">
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
