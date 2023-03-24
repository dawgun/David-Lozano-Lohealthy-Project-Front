import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  createGameActionCreator,
  deleteGameActionCreator,
  loadGamesActionCreator,
  loadMyGamesActionCreator,
  updateGameActionCreator,
} from "../../store/games/gamesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  closeLoaderActionCreator,
  openModalActionCreator,
  showLoaderActionCreator,
} from "../../store/UI/UISlice";

const useGames = () => {
  const urlAPI = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);

  const getAllGames = useCallback(
    async (page: number) => {
      try {
        dispatch(showLoaderActionCreator());

        const response = await fetch(`${urlAPI}games?page=${page}`);

        if (!response.ok) {
          throw new Error();
        }

        const gameList = await response.json();

        dispatch(closeLoaderActionCreator());
        dispatch(loadGamesActionCreator(gameList.games));
      } catch {
        dispatch(
          openModalActionCreator({
            message: "¡Algo ha salido mal!",
            type: false,
          })
        );
      }
    },
    [urlAPI, dispatch]
  );

  const getGameById = useCallback(
    async (idGame: string) => {
      try {
        dispatch(showLoaderActionCreator());

        const response = await fetch(`${urlAPI}games/${idGame}`);

        if (!response.ok) {
          throw new Error();
        }

        const game = await response.json();

        dispatch(closeLoaderActionCreator());
        return game.game;
      } catch {
        dispatch(
          openModalActionCreator({
            message: "¡Juego no encontrado!",
            type: false,
          })
        );
      }
    },
    [urlAPI, dispatch]
  );

  const getGamesByUser = useCallback(async () => {
    try {
      dispatch(showLoaderActionCreator());

      const response = await fetch(`${urlAPI}games/my-list`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.token}`,
        },
      });

      if (!response.ok) {
        throw new Error();
      }

      const gameList = await response.json();

      dispatch(closeLoaderActionCreator());
      dispatch(loadMyGamesActionCreator(gameList.games));
    } catch {
      dispatch(
        openModalActionCreator({
          message: "¡Algo ha salido mal!",
          type: false,
        })
      );
    }
  }, [dispatch, urlAPI, user.token]);

  const deleteGame = async (idGame: string) => {
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
    dispatch(deleteGameActionCreator(idGame));
    dispatch(
      openModalActionCreator({
        message: "Juego borrado satisfactoriamente",
        type: true,
      })
    );
  };

  const createGame = async (formGameData: FormData) => {
    try {
      const response = await fetch(`${urlAPI}games/create`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${user.token}`,
        },
        body: formGameData,
      });

      if (!response.ok) {
        throw new Error();
      }

      const { game } = await response.json();

      dispatch(createGameActionCreator(game));
      dispatch(
        openModalActionCreator({
          message: "Juego creado satisfactoriamente",
          type: true,
        })
      );
      navigate("/mis-juegos");
    } catch {
      dispatch(
        openModalActionCreator({
          message: "Error creando el juego",
          type: false,
        })
      );
    }
  };

  const updateGame = async (gameUpdate: FormData) => {
    try {
      const response = await fetch(`${urlAPI}games/update`, {
        method: "PATCH",
        headers: {
          authorization: `Bearer ${user.token}`,
        },
        body: gameUpdate,
      });

      if (!response.ok) {
        throw new Error();
      }

      const { game } = await response.json();

      dispatch(updateGameActionCreator(game));

      dispatch(
        openModalActionCreator({
          message: "Juego actualizado satisfactoriamente",
          type: true,
        })
      );
      navigate("/mis-juegos");
    } catch {
      dispatch(
        openModalActionCreator({
          message: "Error actualizando el juego",
          type: false,
        })
      );
    }
  };

  const searchGames = useCallback(
    async (gameSearched: string) => {
      try {
        dispatch(showLoaderActionCreator());

        const response = await fetch(
          `${urlAPI}games/search?title=${gameSearched}`
        );

        if (!response.ok) {
          throw new Error();
        }

        const gameList = await response.json();

        dispatch(closeLoaderActionCreator());
        dispatch(loadGamesActionCreator(gameList.games));
      } catch {
        dispatch(
          openModalActionCreator({
            message: "¡Algo ha salido mal!",
            type: false,
          })
        );
      }
    },
    [dispatch, urlAPI]
  );

  return {
    getAllGames,
    deleteGame,
    createGame,
    getGamesByUser,
    getGameById,
    searchGames,
    updateGame,
  };
};

export default useGames;
