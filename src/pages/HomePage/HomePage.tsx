import { useEffect } from "react";
import { useDispatch } from "react-redux";
import GameCardList from "../../components/GameCardList/GameCardList";
import SearchForm from "../../components/SearchForm/SearchForm";
import useGames from "../../hooks/useGames/useGames";
import {
  nextPageActionCreator,
  previousPageActionCreator,
} from "../../store/games/gamesSlice";
import { useAppSelector } from "../../store/hooks";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  const page = useAppSelector((state) => state.games);
  const dispatch = useDispatch();
  const { getAllGames } = useGames();

  useEffect(() => {
    getAllGames(page.currentPage);
  }, [getAllGames, page.currentPage]);

  const previousPageHandler = () => {
    dispatch(previousPageActionCreator());
    window.scroll(0, 0);
  };

  const nextPageHandler = () => {
    dispatch(nextPageActionCreator());
    window.scroll(0, 0);
  };

  return (
    <HomePageStyled className="homepage-container">
      <h2 className="homepage__title">Home</h2>
      <SearchForm />
      <GameCardList />
      <div className="pagination">
        <button
          className={`pagination__previous${
            !page.isPreviousPage ? " disabled" : ""
          }`}
          onClick={previousPageHandler}
          disabled={!page.isPreviousPage}
        >
          ᐸ
        </button>
        <span className="pagination__page">{`${page.currentPage + 1} / ${
          page.totalPages
        }`}</span>
        <button
          className={`pagination__next${!page.isNextPage ? " disabled" : ""}`}
          onClick={nextPageHandler}
          disabled={!page.isNextPage}
        >
          ᐳ
        </button>
      </div>
    </HomePageStyled>
  );
};

export default HomePage;
