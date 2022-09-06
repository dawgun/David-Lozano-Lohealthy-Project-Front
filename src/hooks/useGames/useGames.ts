import { useCallback } from "react";
import { loadGamesActionCreator } from "../../store/games/gamesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { openModalActionCreator } from "../../store/UI/UISlice";

const useGames = () => {
  const urlAPI = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  const getAllGames = useCallback(async () => {
    try {
      const response = await fetch(urlAPI + "games/");

      if (!response.ok) {
        throw new Error();
      }

      const gameList = await response.json();
      dispatch(loadGamesActionCreator(gameList.games));
    } catch {
      dispatch(
        openModalActionCreator({ message: "¡Algo ha salido mal!", type: false })
      );
    }
  }, [urlAPI, dispatch]);

  const deleteGame = async (idGame: number) => {
    try {
      const response = await fetch(`${urlAPI}games/delete/${idGame}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.token}`,
        },
      });

      if (!response.ok) {
        throw new Error();
      }
    } catch {
      dispatch(
        openModalActionCreator({
          message: "Error borrando el juego",
          type: false,
        })
      );
    }

    dispatch(openModalActionCreator({ message: "Juego borrado", type: true }));
  };

  return { getAllGames, deleteGame };
};

export default useGames;
