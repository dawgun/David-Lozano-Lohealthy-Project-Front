import { DetailGame } from "../../store/games/model/game";
import GameCardDetailsStyled from "./GameCardDetailsStyled";

interface GameCardDetailsProps {
  game: DetailGame;
}

const GameCardDetails = ({ game }: GameCardDetailsProps): JSX.Element => {
  const urlAPI = process.env.REACT_APP_API_URL;
  return (
    <GameCardDetailsStyled className="game-detail">
      <h2 className="game-detail__title">{game.title}</h2>
      <img
        className="game-detail__image"
        width={320}
        height={180}
        src={`${urlAPI}${game.image}`}
        alt={`${game.title} game`}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = game.backupImage;
        }}
      ></img>
      <div className="game-detail__info">
        <h3>Autor</h3>
        <span>{game.owner.userName}</span>
        <h3>Jugadores</h3>
        <span>{game.players}</span>
        <h3>Género</h3>
        <span>{game.genre}</span>
        <h3>Lanzamiento</h3>
        <span>{game.release}</span>
        <h3>Sinopsis</h3>
        <p>{game.synopsis}</p>
      </div>
    </GameCardDetailsStyled>
  );
};

export default GameCardDetails;
