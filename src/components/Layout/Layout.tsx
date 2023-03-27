import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
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
import { useAppSelector } from "../../store/hooks";
import pathRoutes from "../../utils/pathRoutes/pathRoutes";
import LayoutStyled from "./LayoutStyle";
import UpdateGamePage from "../../pages/UpdateGamePage/UpdateGamePage";

function Layout() {
  const { isMenuShowing } = useAppSelector((state) => state.ui);
  const {
    home,
    details,
    all,
    createGame,
    updateGame,
    login,
    myGames,
    register,
    root,
  } = pathRoutes;

  return (
    <LayoutStyled className="main-container">
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
          path={`${myGames}${updateGame}/:idGame`}
          element={<UpdateGamePage />}
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
    </LayoutStyled>
  );
}

export default Layout;
