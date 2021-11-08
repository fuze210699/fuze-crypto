import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useState } from "react";
import { ROUTER } from "constants/Global";
import { useGetCryptosQuery } from "apis/cryptoAPI";

export default function TopCrypto({ simplified }) {
  const count = simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptosQuery(count);
  const cryptoList = data?.data?.coins;

  const [cryptos, setCryptos] = useState(cryptoList);
  if (isFetching) return "Loading ...";

  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((item) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={item.id}>
            <Link to={`${ROUTER.Crypto}/${item.id}`}>
              <Card
                title={`${item.rank}.${item.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={item.iconUrl}
                    alt={item.name}
                  />
                }
                hoverable
              >
                <p>Price: {millify(item.price)}</p>
                <p>Market Cap: {millify(item.marketCap)}</p>
                <p>Daily Change: {millify(item.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}
