import { useAppSelector } from "../../store/hooks";
import GameCard from "../GameCard/GameCard";
import GameCardListStyled from "./GameCardListStyled";

const GameCardList = (): JSX.Element => {
  const { games } = useAppSelector((state) => state);
  return (
    <GameCardListStyled className="games-container">
      {games.games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
      {games.games.length === 0 && (
        <span>No tienes ningun juego ahora mismo</span>
      )}
    </GameCardListStyled>
  );
};

export default GameCardList;
