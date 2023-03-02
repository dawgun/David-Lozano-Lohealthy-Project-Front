import { Navigate, Route, Routes } from "react-router-dom";
import AppStyled from "./AppStyled";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";
import Navigation from "../Navigation/Navigation";
import ReverseRouteProtector from "../ReverseRouteProtector/ReverseRouteProtector";
import RouteProtector from "../RouteProtector/RouteProtector";
import UserMenu from "../UserMenu/UserMenu";
import CreateGamePage from "../../pages/CreateGamePage/CreateGamePage";
import GameDetailsPage from "../../pages/GameDetailsPage/GameDetailsPage";
import HomePage from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import MyGameListPage from "../../pages/MyGameListPage/MyGameListPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loginUserActionCreator } from "../../store/user/userSlice";
import fetchToken from "../../utils/auth/auth";
import pathRoutes from "../../utils/pathRoutes/pathRoutes";
import { useEffect } from "react";

function App() {
  const { isLoadingShowing, isModalShowing, isMenuShowing } = useAppSelector(
    (state) => state.ui
  );
  const token = localStorage.getItem("token");
  const dispatch = useAppDispatch();
  const { home, details, all, createGame, login, myGames, register, root } =
    pathRoutes;

  useEffect(() => {
    if (token) {
      const user = fetchToken(token);
      dispatch(loginUserActionCreator(user));
    }
  });

  return (
    <AppStyled className="main-container">
      {isLoadingShowing && <Loading />}
      {isModalShowing && <Modal />}
      <section className="menu-container">
        <Header />
        <Navigation />
        {isMenuShowing && <UserMenu />}
      </section>
      <Routes>
        <Route path={root} element={<Navigate to={home} />} />
        <Route path={home} element={<HomePage />} />
        <Route path={details} element={<GameDetailsPage />} />
        <Route
          path={myGames}
          element={
            <RouteProtector>
              <MyGameListPage />
            </RouteProtector>
          }
        />
        <Route
          path={`${myGames}${createGame}`}
          element={
            <RouteProtector>
              <CreateGamePage />
            </RouteProtector>
          }
        />
        <Route
          path={register}
          element={
            <ReverseRouteProtector>
              <RegisterPage />
            </ReverseRouteProtector>
          }
        />
        <Route
          path={login}
          element={
            <ReverseRouteProtector>
              <LoginPage />
            </ReverseRouteProtector>
          }
        />
        <Route path={all} element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </AppStyled>
  );
}

export default App;
