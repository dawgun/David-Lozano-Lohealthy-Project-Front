import React from "react";

export const LazyHomePage = React.lazy(
  () => import("../../pages/HomePage/HomePage")
);

export const LazyCreateGamePage = React.lazy(
  () => import("../../pages/CreateGamePage/CreateGamePage")
);

export const LazyNotFoundPage = React.lazy(
  () => import("../../pages/NotFoundPage/NotFoundPage")
);

export const LazyGameDetailsPage = React.lazy(
  () => import("../../pages/GameDetailsPage/GameDetailsPage")
);

export const LazyMyGameListPage = React.lazy(
  () => import("../../pages/MyGameListPage/MyGameListPage")
);

export const LazyRegisterPage = React.lazy(
  () => import("../../pages/RegisterPage/RegisterPage")
);

export const LazyUpdateGamePage = React.lazy(
  () => import("../../pages/UpdateGamePage/UpdateGamePage")
);

export const LazyLoginPage = React.lazy(
  () => import("../../pages/LoginPage/LoginPage")
);
