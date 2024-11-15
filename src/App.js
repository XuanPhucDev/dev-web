import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Body from "./Compoment/Global/Body/Body";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderNew from "./Compoment/Global/Header/HeaderNew";
import BackToTop from "./Features/BackToTop";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn lên đầu trang
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [pathname]);
  return (
    <div className="body">
      <HeaderNew></HeaderNew>
      <Body />
      <BackToTop></BackToTop>
    </div>
  );
}

export default App;
