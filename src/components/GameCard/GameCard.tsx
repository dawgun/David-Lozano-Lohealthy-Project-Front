import useGames from "../../hooks/useGames/useGames";
import Game from "../../store/games/model/game";
import { useAppSelector } from "../../store/hooks";
import GameCardStyled from "./GameCardStyled";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps): JSX.Element => {
  debugger;
  const { deleteGame } = useGames();
  const { user } = useAppSelector((state) => state.user);
  const maxLettersSynopsis = 100;
  const isSamePerson = game.owner === user.id;
  return (
    <GameCardStyled className="game">
      <img
        width={320}
        height={180}
        src={game.image}
        alt={`${game.title} game`}
        className="game__image"
      ></img>
      <div className="game__info">
        <h3 className="game__title">{game.title}</h3>
        <div className="game__details">
          <p className="game__synopsis">{`${game.synopsis.slice(
            0,
            maxLettersSynopsis
          )}...`}</p>
          <button className="game__button" onClick={() => {}}>
            Info
          </button>
          {isSamePerson && (
            <button
              className="game__delete"
              onClick={() => deleteGame(game.id)}
            >
              X
            </button>
          )}
        </div>
      </div>
    </GameCardStyled>
  );
};

export default GameCard;
