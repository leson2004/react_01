import { Link, NavLink } from "react-router-dom";
import React, { Children, useContext, useState } from "react";
import {
  HomeOutlined,
  UsergroupAddOutlined,
  ProductOutlined,
  UserOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { AuthContext } from "../context/auth.context";

// NavLink moi lan lick trang , NavLink se tu dong them class : active vao tung the li => tu css
const Header = () => {
  const [current, setCurrent] = useState("home");
  const { user } = useContext(AuthContext);
  console.log("user", user);
  const items = [
    {
      label: <NavLink to="/">Home</NavLink>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <NavLink to="/users">User</NavLink>,
      key: "user",
      icon: <UsergroupAddOutlined />,
    },
    {
      label: <NavLink to="/product">Product</NavLink>,
      key: "product",
      icon: <ProductOutlined />,
    },
    ...(!user.id
      ? [
          {
            label: <NavLink to="/login">Login</NavLink>,
            key: "login",
            icon: <LoginOutlined />,
          },
        ]
      : []),
    ...(user.id
      ? [
          {
            label: `Welcome  ${user.fullName} `,
            key: "setting",
            icon: <UserOutlined />,
            children: [
              {
                label: "Dang Xuat",
                key: "logout",
              },
            ],
          },
        ]
      : []),
  ];

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Header;
