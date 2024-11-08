// import { createContext, useContext, useState } from "react";
// import useAxios from "../Context/API/UseAxios";
// import { useNavigate } from "react-router-dom";
// import useAxiosPost from "../Context/API/UseAxiosPost";

// const CheckLogContext = createContext();

// const CheckLogProvider = ({ children }) => {
//   const getData = useAxios(
//     "https://6724cb3bc39fedae05b2bf65.mockapi.io/categoryProduct/category"
//   );
//   const checklog = useAxios(
//     "https://6724cb3bc39fedae05b2bf65.mockapi.io/categoryProduct/checklog"
//   );
//   const navigate = useNavigate();

//   const checkLogin = () => {
//     // Kiểm tra xem user đã đăng nhập chưa bằng cách xem Local Storage
//     const user = localStorage.getItem("username");
//     if (user) {
//       return { isLoggedIn: true, username: user };
//     }
//     return { isLoggedIn: false, username: null };
//   };
  
//   const logoutUser = () => {
//     // Đăng xuất người dùng và xóa thông tin khỏi Local Storage
//     localStorage.removeItem("username");
//   };

//   return (
//     <CheckLogContext.Provider value={{ logoutUser }}>
//       {children}
//     </CheckLogContext.Provider>
//   );
// };
// const UseCheckLog = () => {
//   return useContext(CheckLogContext);
// };
// export { CheckLogProvider, UseCheckLog };
