import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Typography, Menu } from "antd";
import { Container, LogoContainer } from "./styles/Navbar-styles";
import icon from "assets/img/cryptocurrency.png";
import { ROUTER } from "constants/Global";
import { useLocation } from "react-router";
import {
  HomeOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
export default function Navbar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Navbar.LogoContainer = function NavbarLogoContainer({
  children,
  ...restProps
}) {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <LogoContainer>
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to={ROUTER.HOME}>Fuze Crypto</Link>
        </Typography.Title>
      </LogoContainer>
      <Menu
        selectedKeys={[location.pathname]}
        defaultSelectedKeys={["/news"]}
        className="nav"
        theme="dark"
      >
        <Menu.Item key={ROUTER.HOME} icon={<HomeOutlined />}>
          <Link to={ROUTER.HOME}>Home</Link>
        </Menu.Item>{" "}
        <Menu.Item key={ROUTER.CURRENCY} icon={<FundOutlined />}>
          <Link to={ROUTER.CURRENCY}>Currency</Link>
        </Menu.Item>{" "}
        <Menu.Item key={ROUTER.EXCHANGES} icon={<MoneyCollectOutlined />}>
          <Link to={ROUTER.EXCHANGES}>Exchanges</Link>
        </Menu.Item>{" "}
        <Menu.Item key={ROUTER.NEWS} icon={<BulbOutlined />}>
          <Link to={ROUTER.NEWS}>News</Link>
        </Menu.Item>{" "}
        <Menu.Item key={ROUTER.HOW} icon={<QuestionCircleOutlined />}>
          <Link to={ROUTER.HOW}>How Its Work ?</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};
