import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useEffect, useState } from "react";
import { ROUTER } from "constants/Global";
import { useGetCryptosQuery } from "apis/cryptoAPI";
import { Loading } from "components";

export default function Currency() {
  const { data: cryptoList, isFetching } = useGetCryptosQuery(100);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const filterData = cryptoList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filterData);
  }, [searchTerm, cryptoList]);
  if (isFetching) return <Loading />;

  return (
    <>
      <div className="search-crypto">
        <Input
          placeholder="Search Crypto"
          onChange={({ target }) => setSearchTerm(target.value)}
        />
      </div>
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
