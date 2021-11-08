import React from "react";

import { Typography } from "antd";
import { HomeContent } from "features";

export default function Home() {
  const { Title } = Typography;

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <HomeContent />
    </>
  );
}
