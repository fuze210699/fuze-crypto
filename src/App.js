import { ROUTER } from "constants/Global";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import { Suspense, useEffect, useState } from "react";
import { Footer, Loading, Navbar, NotFound } from "components";
import { Home, CryptoDetail, Currency, Exchanges, News } from "pages";
import IntroducePopup from "components/Popup/IntroducePopup";
import FirstLoad from "components/FirstLoad";

export default function App() {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  useEffect(() => {
    const firstLoadTimeOut = setTimeout(() => {
      setIsFirstLoad(false);
    }, 5000);
    return () => {
      clearTimeout(firstLoadTimeOut);
    };
  }, []);
  return (
    <div className="app">
      {isFirstLoad ? (
        <FirstLoad />
      ) : (
        <Suspense fallback={<Loading></Loading>}>
          <IntroducePopup />
          <div className="navbar">
            <Navbar />
          </div>
          <div className="main">
            <Layout>
              <div className="routes">
                <Routes>
                  <Route path={ROUTER.HOME} element={<Home />} />
                  <Route path={ROUTER.CURRENCY} element={<Currency />} />
                  <Route path={ROUTER.EXCHANGES} element={<Exchanges />} />
                  <Route path={ROUTER.NEWS} element={<News />} />
                  <Route
                    path={ROUTER.CryptoDetail}
                    element={<CryptoDetail />}
                  />
                  <Route path="*" exact element={<NotFound />} />
                </Routes>
              </div>
              <div className="footer">
                <Footer />
              </div>
            </Layout>
          </div>
        </Suspense>
      )}
    </div>
  );
}
