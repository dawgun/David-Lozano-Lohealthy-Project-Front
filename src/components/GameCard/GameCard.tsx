import useGames from "../../hooks/useGames/useGames";
import { Game } from "../../store/games/model/game";
import { useAppSelector } from "../../store/hooks";
import GameCardStyled from "./GameCardStyled";
import { useLocation, useNavigate } from "react-router-dom";
import pathRoutes from "../../utils/pathRoutes/pathRoutes";
import Button from "../Button/Button";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps): JSX.Element => {
  const { deleteGame } = useGames();
  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const maxLettersSynopsis = 80;
  const isSamePerson = game.owner === user.id;
  const { pathname } = useLocation();
  const { home, myGames } = pathRoutes;

  const infoHandler = () => {
    navigate(`/details/${game.id}`);
  };

  return (
    <GameCardStyled className="game">
      <img
        width={90}
        height={160}
        src={game.backupImage}
        alt={`${game.title} game`}
        className="game__image"
      ></img>
      <div className="game__info">
        <h3 className="game__title">{game.title}</h3>
        <p className="game__synopsis">{`${game.synopsis.slice(
          0,
          maxLettersSynopsis
        )}...`}</p>
        {pathname === home && (
          <Button onClick={infoHandler} text="Info"></Button>
        )}
        {pathname === myGames && (
          <Button onClick={infoHandler} text="Edit"></Button>
        )}
      </div>
      {isSamePerson && (
        <button className="game__delete" onClick={() => deleteGame(game.id)}>
          ✗
        </button>
      )}
    </GameCardStyled>
  );
};

export default GameCard;
