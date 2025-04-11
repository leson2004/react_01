import React, { useContext, useState } from "react";
import { Form, Input, Button, Typography, message, notification } from "antd";
import { loginAPI } from "../services/api.service";
import { useNavigate } from "react-router";
import { AuthContext } from "../components/context/auth.context";

const { Link, Text } = Typography;

const LoginPage = () => {
  const { setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    const res = await loginAPI(values.email, values.password);
    if (res.data) {
      message.success("đăng nhập thành công ");
      localStorage.setItem("access_token", res.data.access_token);
      setUser(res.data.user);
      navigate("/");
    } else {
      notification.error({
        message: "Error login",
        description: JSON.stringify(res.message),
      });
    }
    setLoading(false);
  };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

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
        //onFinishFailed={onFinishFailed}
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
          <Button type="primary" htmlType="submit" block loading={loading}>
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
