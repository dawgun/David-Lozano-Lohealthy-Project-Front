import { DetailGame } from "../../store/games/model/game";
import GameCardDetailsStyled from "./GameCardDetailsStyled";

interface GameCardDetailsProps {
  game: DetailGame;
}

const GameCardDetails = ({ game }: GameCardDetailsProps): JSX.Element => {
  return (
    <GameCardDetailsStyled className="game-detail">
      <h3 className="game-detail__title">{game.title}</h3>
      <img
        className="game-detail__image"
        width={320}
        height={180}
        src={game.image}
        alt={`${game.title} game`}
      ></img>
      <div className="game-detail__list">
        <div className="game-detail__info">
          <h4>Autor</h4>
          <span>{game.owner.userName}</span>
        </div>
        <div className="game-detail__info">
          <h4>Jugadores</h4>
          <span>{game.players}</span>
        </div>
        <div className="game-detail__info">
          <h4>Género</h4>
          <span>{game.genre}</span>
        </div>
        <div className="game-detail__info">
          <h4>Lanzamiento</h4>
          <span>{game.release.slice(0, 10)}</span>
        </div>
        <div className="game-detail__sinopsis">
          <h4>Sinopsis</h4>
          <p>{game.synopsis}</p>
        </div>
      </div>
    </GameCardDetailsStyled>
  );
};

export default GameCardDetails;
