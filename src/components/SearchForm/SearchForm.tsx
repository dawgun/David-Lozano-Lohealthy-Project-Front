import { useRef } from "react";
import useGames from "../../hooks/useGames/useGames";
import FormStyled from "../RegisterForm/FormStyled";

const SearchForm = (): JSX.Element => {
  const { searchGames, getAllGames } = useGames();
  let timeoutId = useRef<ReturnType<typeof setTimeout>>();

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const gameSearched = event.target.value;

    clearTimeout(timeoutId.current);

    timeoutId.current = setTimeout(() => {
      if (!gameSearched) {
        getAllGames(0);
      }
      searchGames(gameSearched);
    }, 1000);
  };

  return (
    <FormStyled>
      <input
        aria-label="Search"
        placeholder="Search"
        className="search-form__control"
        type={"search"}
        onChange={handleChange}
        autoComplete="off"
      />
    </FormStyled>
  );
};

export default SearchForm;
