import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameCardDetails from "../../components/GameCardDetails/GameCardDetails";
import GameForm from "../../components/GameForm/GameForm";
import useGames from "../../hooks/useGames/useGames";
import { DetailGame } from "../../store/games/model/game";
import UpdateGamePageStyled from "./UpdateGamePageStyled";

const UpdateGamePage = (): JSX.Element => {
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
    <UpdateGamePageStyled className="update-page">
      <h2 className="update-page__title">Update</h2>
      <div className="update-page__container">
        <GameCardDetails game={gameDetail} />
        <GameForm textButton="Editar" gameId={gameDetail.id} />
      </div>
    </UpdateGamePageStyled>
  );
};

export default UpdateGamePage;
