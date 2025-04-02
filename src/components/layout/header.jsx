import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import {
  HomeOutlined,
  UsergroupAddOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
// NavLink moi lan lick trang , NavLink se tu dong them class : active vao tung the li => tu css
const Header = () => {
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
  ];

  const [current, setCurrent] = useState("home");
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
