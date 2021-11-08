import { Typography } from "antd";
import { useGetCryptosQuery } from "apis/cryptoAPI";
import { Loading } from "components";
import { News } from "pages";
import { Link } from "react-router-dom";
import HomeContent from "./components";
import Stats from "./components/Stats";
import TopCrypto from "./components/TopCrypto";
import "./styles/style.css";
export default function HomeContainer() {
  const { data, isFetching } = useGetCryptosQuery(10);
  const { Title } = Typography;
  if (isFetching) return <Loading />;
  const globalStats = data?.data?.stats;
  return (
    <HomeContent>
      <HomeContent.Stats>
        <Stats globalStats={globalStats} />
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
