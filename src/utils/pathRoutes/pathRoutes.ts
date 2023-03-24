interface PathRoutes {
  root: string;
  home: string;
  details: string;
  myGames: string;
  createGame: string;
  updateGame: string;
  register: string;
  login: string;
  all: string;
}

const pathRoutes: PathRoutes = {
  root: "/",
  home: "/home",
  details: "/details/:idGame",
  myGames: "/mis-juegos",
  createGame: "/create",
  updateGame: "/update",
  register: "/register",
  login: "/login",
  all: "*",
};

export default pathRoutes;
