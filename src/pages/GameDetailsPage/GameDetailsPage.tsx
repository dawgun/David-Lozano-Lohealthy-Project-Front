import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameCardDetails from "../../components/GameCardDetails/GameCardDetails";
import useGames from "../../hooks/useGames/useGames";
import GameDetailsPageStyled from "./GameDetailsPageStyled";

const GameDetailsPage = (): JSX.Element => {
  const initialGame = {
    title: "",
    image: "",
    backupImage: "",
    players: "",
    genre: "",
    release: "",
    synopsis: "",
    owner: { userName: "", id: "" },
    id: "",
  };
  debugger;
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
