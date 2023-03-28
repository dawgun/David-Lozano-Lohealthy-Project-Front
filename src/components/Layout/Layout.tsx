import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import ReverseRouteProtector from "../ReverseRouteProtector/ReverseRouteProtector";
import RouteProtector from "../RouteProtector/RouteProtector";
import UserMenu from "../UserMenu/UserMenu";
import { useAppSelector } from "../../store/hooks";
import pathRoutes from "../../utils/pathRoutes/pathRoutes";
import LayoutStyled from "./LayoutStyle";
import { Suspense } from "react";
import {
  LazyCreateGamePage,
  LazyGameDetailsPage,
  LazyHomePage,
  LazyLoginPage,
  LazyMyGameListPage,
  LazyNotFoundPage,
  LazyRegisterPage,
  LazyUpdateGamePage,
} from "../../utils/lazyComponents/lazyComponents";

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
        <Route
          path={home}
          element={
            <Suspense fallback={<></>}>
              <LazyHomePage />
            </Suspense>
          }
        />
        <Route path={details} element={<LazyGameDetailsPage />} />
        <Route
          path={myGames}
          element={
            <RouteProtector>
              <Suspense fallback={<></>}>
                <LazyMyGameListPage />
              </Suspense>
            </RouteProtector>
          }
        />
        <Route
          path={`${myGames}${createGame}`}
          element={
            <RouteProtector>
              <Suspense fallback={<></>}>
                <LazyCreateGamePage />
              </Suspense>
            </RouteProtector>
          }
        />
        <Route
          path={`${myGames}${updateGame}/:idGame`}
          element={
            <Suspense fallback={<></>}>
              <LazyUpdateGamePage />
            </Suspense>
          }
        />
        <Route
          path={register}
          element={
            <ReverseRouteProtector>
              <Suspense fallback={<></>}>
                <LazyRegisterPage />
              </Suspense>
            </ReverseRouteProtector>
          }
        />
        <Route
          path={login}
          element={
            <ReverseRouteProtector>
              <Suspense fallback={<></>}>
                <LazyLoginPage />
              </Suspense>
            </ReverseRouteProtector>
          }
        />
        <Route
          path={all}
          element={
            <Suspense fallback={<></>}>
              <LazyNotFoundPage />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </LayoutStyled>
  );
}

export default Layout;
