import {
  nextPageActionCreator,
  previousPageActionCreator,
} from "../../store/games/gamesSlice";
import { PaginationAPI } from "../../store/games/model/game";
import { useAppDispatch } from "../../store/hooks";
import PaginationStyled from "./PaginationStyled";

interface PaginationProps {
  paginationInfo: PaginationAPI;
}

const Pagination = ({
  paginationInfo: { currentPage, isNextPage, isPreviousPage, totalPages },
}: PaginationProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const previousPageHandler = () => {
    dispatch(previousPageActionCreator());
    window.scroll(0, 0);
  };

  const nextPageHandler = () => {
    dispatch(nextPageActionCreator());
    window.scroll(0, 0);
  };

  return (
    <PaginationStyled className="pagination">
      <button
        className={`pagination__previous${!isPreviousPage ? " disabled" : ""}`}
        onClick={previousPageHandler}
        disabled={!isPreviousPage}
      >
        ᐸ
      </button>
      <span className="pagination__page">{`${
        currentPage + 1
      } / ${totalPages}`}</span>
      <button
        className={`pagination__next${!isNextPage ? " disabled" : ""}`}
        onClick={nextPageHandler}
        disabled={!isNextPage}
      >
        ᐳ
      </button>
    </PaginationStyled>
  );
};

export default Pagination;
