import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGames from "../../hooks/useGames/useGames";
import MyGameListPageStyled from "./MyGameListPageStyled";
import GameCardList from "../../components/GameCardList/GameCardList";

const MyGameListPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { getGamesByUser } = useGames();

  const navigateHandler = () => {
    navigate("/mis-juegos/create");
  };

  useEffect(() => {
    getGamesByUser();
  }, [getGamesByUser]);

  return (
    <MyGameListPageStyled className="my-games__page">
      <h2 className="my-games__title">Mis Juegos</h2>
      <button className="my-games__button" onClick={navigateHandler}>
        Crear Juego
      </button>
      <GameCardList />
    </MyGameListPageStyled>
  );
};

export default MyGameListPage;
