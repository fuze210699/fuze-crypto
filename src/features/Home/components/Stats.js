import { Col, Row, Statistic } from "antd";
import { useGetCryptosQuery } from "apis/cryptoAPI";
import millify from "millify";
import React from "react";

export default function Stats({ globalStats }) {
  if (!globalStats) return "Something went wrong";
  return (
    <Row>
      <Col span={12}>
        <Statistic title="Total CryptoCurrencies" value={globalStats.total} />
      </Col>
      <Col span={12}>
        <Statistic
          title="Total Exchanges"
          value={millify(globalStats.totalExchanges)}
        />
      </Col>
      <Col span={12}>
        <Statistic
          title="Total Market Cap"
          value={millify(globalStats.totalMarketCap)}
        />
      </Col>
      <Col span={12}>
        <Statistic
          title="Total 24h Volume"
          value={millify(globalStats.total24hVolume)}
        />
      </Col>
      <Col span={12}>
        <Statistic
          title="Total Markets"
          value={millify(globalStats.totalMarkets)}
        />
      </Col>
    </Row>
  );
}
