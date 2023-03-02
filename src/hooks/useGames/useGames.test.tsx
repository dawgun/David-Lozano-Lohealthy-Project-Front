import mockDispatch from "../../testUtils/mocks/mockDispatch/mockDispatch";
import mockReactRouter from "../../testUtils/mocks/mockReactRouter/mockReactRouter";
import { RenderHookResult } from "@testing-library/react";
import {
  createGameActionCreator,
  deleteGameActionCreator,
  loadGamesActionCreator,
  loadMyGamesActionCreator,
} from "../../store/games/gamesSlice";
import {
  closeLoaderActionCreator,
  openModalActionCreator,
  showLoaderActionCreator,
} from "../../store/UI/UISlice";
import customRenderHook from "../../testUtils/wrappers/customRenderHook/customRenderHook";
import useGames from "./useGames";

describe("Given the useGames custom hook", () => {
  describe("When getAllGames it's called", () => {
    describe("And fetch have an error", () => {
      test("Then dispatch must be called with action openModal", async () => {
        const { result } = customRenderHook({
          customHook: useGames,
        }) as RenderHookResult<ReturnType<typeof useGames>, unknown>;

        await result.current.getAllGames(1);

        expect(mockDispatch).toHaveBeenCalledWith(
          openModalActionCreator({
            message: "¡Algo ha salido mal!",
            type: false,
          })
        );
      });
    });

    describe("And fetch resolve with a list of games", () => {
      test("Then dispatch must be called with action showLoader", async () => {
        const { result } = customRenderHook({
          customHook: useGames,
        }) as RenderHookResult<ReturnType<typeof useGames>, unknown>;

        await result.current.getAllGames(1);

        expect(mockDispatch).toHaveBeenCalledWith(showLoaderActionCreator());
      });

      test("Then dispatch must be called with action closeLoader", async () => {
        const { result } = customRenderHook({
          customHook: useGames,
        }) as RenderHookResult<ReturnType<typeof useGames>, unknown>;

        await result.current.getAllGames(1);

        expect(mockDispatch).toHaveBeenCalledWith(closeLoaderActionCreator());
      });

      test("Then dispatch must be called with action loadGames", async () => {
        const { result } = customRenderHook({
          customHook: useGames,
        }) as RenderHookResult<ReturnType<typeof useGames>, unknown>;

        await result.current.getAllGames(1);

        expect(mockDispatch).toHaveBeenCalledWith(
          loadGamesActionCreator({
            isPreviousPage: false,
            isNextPage: true,
            totalPages: 1,
            currentPage: 0,
            games: [],
          })
        );
      });
    });
  });

  describe("When deleteGame it's called", () => {
    describe("And fetch is done with existent id game", () => {
      test("Then dispatch must be called with delete action openModal with id '2'", async () => {
        const payloadDelete = "2";

        const { result } = customRenderHook({
          customHook: useGames,
        }) as RenderHookResult<ReturnType<typeof useGames>, unknown>;
        await result.current.deleteGame("2");

        expect(mockDispatch).toHaveBeenCalledWith(
          deleteGameActionCreator(payloadDelete)
        );
      });

      test("Then dispatch must be called with correct action openModal", async () => {
        const payloadModal = {
          message: "Juego borrado satisfactoriamente",
          type: true,
        };

        const { result } = customRenderHook({
          customHook: useGames,
        }) as RenderHookResult<ReturnType<typeof useGames>, unknown>;
        await result.current.deleteGame("1");

        expect(mockDispatch).toHaveBeenCalledWith(
          openModalActionCreator(payloadModal)
        );
      });
    });

    describe("And fetch is done with inexistent id game", () => {
      test("Then dispatch must be called with error action openModal", async () => {
        const payloadModal = {
          message: "Error borrando el juego",
          type: false,
        };

        const { result } = customRenderHook({
          customHook: useGames,
        }) as RenderHookResult<ReturnType<typeof useGames>, unknown>;
        await result.current.deleteGame("2");

        expect(mockDispatch).toHaveBeenCalledWith(
          openModalActionCreator(payloadModal)
        );
      });
    });
  });

  describe("When createGame it's called", () => {
    describe("And fetch is done with a correct form game", () => {
      const correctFormGameData = new FormData();
      correctFormGameData.append("title", "zelda");

      test("Then dispatch must be called with correct action createGame with game", async () => {
        const payloadActionCreator = {
          title: "Zelda",
          genre: "",
          image: "",
          backupImage: "",
          players: "",
          synopsis: "",
          release: "",
          owner: "2",
          id: "1",
        };

        const { result } = customRenderHook({
          customHook: useGames,
        }) as RenderHookResult<ReturnType<typeof useGames>, unknown>;
        await result.current.createGame(correctFormGameData);

        expect(mockDispatch).toHaveBeenCalledWith(
          createGameActionCreator(payloadActionCreator)
        );
      });

      test("Then dispatch must be called with correct action openModal", async () => {
        const payloadModal = {
          message: "Juego creado satisfactoriamente",
          type: true,
        };

        const { result } = customRenderHook({
          customHook: useGames,
        }) as RenderHookResult<ReturnType<typeof useGames>, unknown>;
        await result.current.createGame(correctFormGameData);

        expect(mockDispatch).toHaveBeenCalledWith(
          openModalActionCreator(payloadModal)
        );
      });

      test("Then navigate must be called with '/mis-juegos'", async () => {
        const navigatePath = "/mis-juegos";

        const { result } = customRenderHook({
          customHook: useGames,
        }) as RenderHookResult<ReturnType<typeof useGames>, unknown>;
        await result.current.createGame(correctFormGameData);

        expect(mockReactRouter.useNavigate).toHaveBeenCalledWith(navigatePath);
      });
    });

    describe("And fetch is done with incorrect form game", () => {
      test("Then dispatch must be called with error action openModal", async () => {
        const payloadErrorModal = {
          message: "Error creando el juego",
          type: false,
        };
        const incorrectFormGameData = new FormData();
        incorrectFormGameData.append("title", "");

        const { result } = customRenderHook({
          customHook: useGames,
        }) as RenderHookResult<ReturnType<typeof useGames>, unknown>;
        await result.current.createGame(incorrectFormGameData);

        expect(mockDispatch).toHaveBeenCalledWith(
          openModalActionCreator(payloadErrorModal)
        );
      });
    });
  });

  describe("When getGamesByUser it's called", () => {
    describe("And fetch have an error", () => {
      test("Then dispatch must be called with action openModal", async () => {
        const payloadModal = {
          message: "¡Algo ha salido mal!",
          type: false,
        };

        const { result } = customRenderHook({
          customHook: useGames,
        }) as RenderHookResult<ReturnType<typeof useGames>, unknown>;

        await result.current.getGamesByUser();

        expect(mockDispatch).toHaveBeenCalledWith(
          openModalActionCreator(payloadModal)
        );
      });
    });

    describe("And fetch resolve with a list of games", () => {
      test("Then dispatch must be called with action showLoader", async () => {
        const { result } = customRenderHook({
          customHook: useGames,
        }) as RenderHookResult<ReturnType<typeof useGames>, unknown>;

        await result.current.getGamesByUser();

        expect(mockDispatch).toHaveBeenCalledWith(showLoaderActionCreator());
      });

      test("Then dispatch must be called with action closeLoader", async () => {
        const { result } = customRenderHook({
          customHook: useGames,
        }) as RenderHookResult<ReturnType<typeof useGames>, unknown>;
        await result.current.getGamesByUser();

        expect(mockDispatch).toHaveBeenCalledWith(closeLoaderActionCreator());
      });

      test("Then dispatch must be called with action loadGames", async () => {
        const { result } = customRenderHook({
          customHook: useGames,
        }) as RenderHookResult<ReturnType<typeof useGames>, unknown>;

        await result.current.getGamesByUser();

        expect(mockDispatch).toHaveBeenCalledWith(loadMyGamesActionCreator([]));
      });
    });
  });

  describe("When getGamesById it's called", () => {
    describe("And fetch with incorrect id and have an error", () => {
      test("Then dispatch must be called with action openModal", async () => {
        const incorrectId = "errorId";
        const payloadModal = {
          message: "¡Juego no encontrado!",
          type: false,
        };

        const { result } = customRenderHook({
          customHook: useGames,
        }) as RenderHookResult<ReturnType<typeof useGames>, unknown>;

        await result.current.getGameById(incorrectId);

        expect(mockDispatch).toHaveBeenCalledWith(
          openModalActionCreator(payloadModal)
        );
      });
    });

    describe("And fetch resolve with a list of games", () => {
      const correctId = "correctId";

      test("Then dispatch must be called with action showLoader", async () => {
        const { result } = customRenderHook({
          customHook: useGames,
        }) as RenderHookResult<ReturnType<typeof useGames>, unknown>;
        await result.current.getGameById(correctId);

        expect(mockDispatch).toHaveBeenCalledWith(showLoaderActionCreator());
      });

      test("Then dispatch must be called with action closeLoader", async () => {
        const { result } = customRenderHook({
          customHook: useGames,
        }) as RenderHookResult<ReturnType<typeof useGames>, unknown>;

        await result.current.getGameById(correctId);

        expect(mockDispatch).toHaveBeenCalledWith(closeLoaderActionCreator());
      });

      test("Then should return 'game'", async () => {
        const { result } = customRenderHook({
          customHook: useGames,
        }) as RenderHookResult<ReturnType<typeof useGames>, unknown>;

        const game = await result.current.getGameById(correctId);

        expect(game).toBe("game");
      });
    });
  });
});
