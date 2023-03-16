import { useEffect } from "react";
import GameCardList from "../../components/GameCardList/GameCardList";
import Pagination from "../../components/Pagination/Pagination";
import SearchForm from "../../components/SearchForm/SearchForm";
import useGames from "../../hooks/useGames/useGames";
import { useAppSelector } from "../../store/hooks";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  const paginationInfo = useAppSelector((state) => state.games);
  const { getAllGames } = useGames();
  const isNeedPagination = paginationInfo.totalPages > 1;

  useEffect(() => {
    getAllGames(paginationInfo.currentPage);
  }, [getAllGames, paginationInfo.currentPage]);

  return (
    <HomePageStyled className="homepage-container">
      <h2 className="homepage__title">Home</h2>
      <SearchForm />
      <GameCardList />
      {isNeedPagination && <Pagination paginationInfo={paginationInfo} />}
    </HomePageStyled>
  );
};

export default HomePage;
