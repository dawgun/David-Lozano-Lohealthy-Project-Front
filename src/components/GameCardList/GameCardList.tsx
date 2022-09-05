import Game from "../../store/games/model/game";
import { useAppSelector } from "../../store/hooks";
import GameCard from "../GameCard/GameCard";
import GameCardListStyled from "./GameCardListStyled";

const GameCardList = (): JSX.Element => {
  const gameList: Game[] = useAppSelector((state) => state.games);
  return (
    <GameCardListStyled className="games-container">
      {gameList.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </GameCardListStyled>
  );
};

export default GameCardList;
