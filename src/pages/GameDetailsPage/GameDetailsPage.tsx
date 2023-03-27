import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameCardDetails from "../../components/GameCardDetails/GameCardDetails";
import useGames from "../../hooks/useGames/useGames";
import { DetailGame } from "../../store/games/model/game";
import GameDetailsPageStyled from "./GameDetailsPageStyled";

const GameDetailsPage = (): JSX.Element => {
  const initialGame = {} as DetailGame;

  const { getGameById } = useGames();
  const [gameDetail, setGameDetail] = useState(initialGame);
  const { idGame } = useParams();

  useEffect(() => {
    (async () => {
      const game = await getGameById(idGame as string);
      setGameDetail(game);
    })();
  }, [getGameById, idGame]);

  return (
    <GameDetailsPageStyled className="details-page">
      <h2 className="details-page__title">Detalles del juego</h2>
      <GameCardDetails game={gameDetail} />
    </GameDetailsPageStyled>
  );
};

export default GameDetailsPage;
