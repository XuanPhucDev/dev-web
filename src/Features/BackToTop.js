import React, { useEffect, useState } from "react";
import "./BackToTop.css";
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Hàm cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // Xử lý sự kiện khi người dùng cuộn trang
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div>
      {isVisible && (
        <div className="back-to-top" onClick={scrollToTop}>
        <i class="fa-solid fa-arrow-up"></i>
        </div>
      )}
    </div>
  );
};

export default BackToTop;
