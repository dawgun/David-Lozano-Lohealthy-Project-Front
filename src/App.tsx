import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppStyled from "./AppStyled";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Navigation from "./components/Navigation/Navigation";
import UserMenu from "./components/UserMenu/UserMenu";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { loginUserActionCreator } from "./store/user/userSlice";
import fetchToken from "./utils/auth/auth";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { isModalShowing } = useAppSelector((state) => state.ui);
  const token = localStorage.getItem("token");
  const dispach = useAppDispatch();

  if (token) {
    const user = fetchToken(token);
    dispach(loginUserActionCreator(user));
  }

  const menuToogleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppStyled className="main-container">
      {isModalShowing && <Modal />}
      <Header actionOnClick={menuToogleHandler} />
      <Navigation />
      {isOpen && <UserMenu actionOnClick={menuToogleHandler} />}
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </AppStyled>
  );
}

export default App;
