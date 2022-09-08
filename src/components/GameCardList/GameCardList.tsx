import { useAppSelector } from "../../store/hooks";
import GameCard from "../GameCard/GameCard";
import GameCardListStyled from "./GameCardListStyled";

const GameCardList = (): JSX.Element => {
  const { games } = useAppSelector((state) => state);
  return (
    <GameCardListStyled className="games-container">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </GameCardListStyled>
  );
};

export default GameCardList;
