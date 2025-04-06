import React from "react";
import { Form, Input, Button, Typography } from "antd";

const { Link, Text } = Typography;

const LoginPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "100px auto",
        padding: 24,
        border: "1px solid #f0f0f0",
        borderRadius: 8,
      }}
    >
      <Form
        name="login"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Vui lòng nhập email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link href="/">Go to homepage</Link>
        </div>

        <div style={{ textAlign: "center", marginTop: 16 }}>
          <Text>Chưa có tài khoản? </Text>
          <Link href="/register">Đăng ký tại đây</Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
