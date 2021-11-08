import React from "react";
import { Select, Typography, Card, Row, Col, Avatar } from "antd";
import { useGetNewsQuery } from "apis/newsAPI";
import moment from "moment";
import { useState } from "react";
import { useGetCryptosQuery } from "apis/cryptoAPI";
import { Loading } from "components";
const { Option } = Select;

const { Text, Title } = Typography;
const defaultImage =
  "https://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";
export default function News({ simplified }) {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });

  if (!cryptoNews?.value) return <Loading />;
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {data?.data?.coins?.map((currency, i) => (
              <Option key={i} value={currency.name}>
                {currency.name}
              </Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews?.value.map((news, index) => (
        <Col xs={24} sm={12} lg={8} key={index}>
          <a href={news.url} target="_blank" rel="noreferrer">
            <Card hoverable className="news-card">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  src={news?.image?.thumbnail?.contentUrl || defaultImage}
                  alt="news"
                />
              </div>
              <p>
                {news.description.length > 200
                  ? `${news.description.substring(0, 200)}...`
                  : news.description}
              </p>

              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      defaultImage
                    }
                    alt="Provider"
                  />
                  <Text className="provider-name">
                    {news?.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news?.datePublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </Card>
          </a>
        </Col>
      ))}
    </Row>
  );
}
