import { Typography } from "antd";
import { useGetCryptosQuery } from "apis/cryptoAPI";
import axios from "axios";
import { Loading } from "components";
import { News } from "pages";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeContent from "./components";
import Stats from "./components/Stats";
import TopCrypto from "./components/TopCrypto";
import "./styles/style.css";
export default function HomeContainer() {
  // const { data, isFetching } = useGetCryptosQuery(10);
  const { Title } = Typography;
  // if (isFetching) return <Loading />;
  // const globalStats = data?.data?.stats;
  const URL = "https://api.coinranking.com/v2";
  useEffect(() => {
    const option = {
      "x-access-token":
        "coinranking3ef17738ca8b69ab06226bd6d7cd2a8901e35582325199fb",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    axios.get(`${URL}/coins?limit=10dsads`, option).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <HomeContent>
      <HomeContent.Stats>
        {/* <Stats globalStats={globalStats} /> */}
      </HomeContent.Stats>
      <HomeContent.Heading className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Crypto Currencies In The World
        </Title>
        <Title level={2} className="show-more">
          <Link to="/currency">Show More</Link>
        </Title>
      </HomeContent.Heading>
      <TopCrypto simplified />
      <HomeContent.Heading className="home-heading-container">
        <Title level={2} className="home-title">
          Top News
        </Title>
        <Title level={2} className="show-more">
          <Link to="/news"> Show More</Link>
        </Title>
      </HomeContent.Heading>
      <News simplified />
    </HomeContent>
  );
}
