import React from "react";
import { Typography, Space } from "antd";
import { Link } from "react-router-dom";
import { ROUTER } from "constants/Global";

export default function Index() {
  return (
    <>
      <Typography.Title level={2} style={{ color: "white" }}>
        Crypto - All rights reserved
      </Typography.Title>
      <Space>
        <Link to={ROUTER.HOME}>Home</Link>
        <Link to={ROUTER.EXCHANGES}>Exchanges</Link>
        <Link to={ROUTER.NEWS}>News</Link>
      </Space>
    </>
  );
}
