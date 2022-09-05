import { loadGamesActionCreator } from "../../store/games/gamesSlice";
import { useAppDispatch } from "../../store/hooks";
import { openModalActionCreator } from "../../store/UI/UISlice";

const useGames = () => {
  const urlAPI = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();

  const getAllGames = async () => {
    try {
      const response = await fetch(urlAPI + "games/");

      if (!response.ok) {
        throw new Error();
      }

      const gameList = await response.json();
      dispatch(loadGamesActionCreator(gameList));
    } catch {
      dispatch(
        openModalActionCreator({ message: "¡Algo ha salido mal!", type: false })
      );
    }
  };

  return { getAllGames };
};

export default useGames;
