import { useEffect } from "react";
import GameCardList from "../../components/GameCardList/GameCardList";
import useGames from "../../hooks/useGames/useGames";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  const { getAllGames } = useGames();
  useEffect(() => {
    getAllGames();
  }, [getAllGames]);

  return (
    <HomePageStyled className="homepage-container">
      <h2 className="homepage__title">Home</h2>
      <GameCardList />
    </HomePageStyled>
  );
};

export default HomePage;
