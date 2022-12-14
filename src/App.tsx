import { Navigate, Route, Routes } from "react-router-dom";
import AppStyled from "./AppStyled";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import Modal from "./components/Modal/Modal";
import Navigation from "./components/Navigation/Navigation";
import ReverseRouteProtector from "./components/ReverseRouteProtector/ReverseRouteProtector";
import RouteProtector from "./components/RouteProtector/RouteProtector";
import UserMenu from "./components/UserMenu/UserMenu";
import CreateGamePage from "./pages/CreateGamePage/CreateGamePage";
import GameDetailsPage from "./pages/GameDetailsPage/GameDetailsPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MyGameListPage from "./pages/MyGameListPage/MyGameListPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { loginUserActionCreator } from "./store/user/userSlice";
import fetchToken from "./utils/auth/auth";

function App() {
  const storeUI = useAppSelector((state) => state.ui);
  const token = localStorage.getItem("token");
  const dispach = useAppDispatch();

  if (token) {
    const user = fetchToken(token);
    dispach(loginUserActionCreator(user));
  }

  return (
    <AppStyled className="main-container">
      {storeUI.isLoadingShowing && <Loading />}
      {storeUI.isModalShowing && <Modal />}
      <section className="menu-container">
        <Header />
        <Navigation />
        {storeUI.isMenuShowing && <UserMenu />}
      </section>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/details/:idGame" element={<GameDetailsPage />} />
        <Route
          path="/mis-juegos"
          element={
            <RouteProtector>
              <MyGameListPage />
            </RouteProtector>
          }
        />
        <Route
          path="/mis-juegos/create"
          element={
            <RouteProtector>
              <CreateGamePage />
            </RouteProtector>
          }
        />
        <Route
          path="/register"
          element={
            <ReverseRouteProtector>
              <RegisterPage />
            </ReverseRouteProtector>
          }
        />
        <Route
          path="/login"
          element={
            <ReverseRouteProtector>
              <LoginPage />
            </ReverseRouteProtector>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </AppStyled>
  );
}

export default App;
