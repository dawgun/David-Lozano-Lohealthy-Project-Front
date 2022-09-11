import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {
  createGameActionCreator,
  deleteGameActionCreator,
  loadGamesActionCreator,
} from "../../store/games/gamesSlice";
import { store } from "../../store/store";
import { openModalActionCreator } from "../../store/UI/UISlice";
import useGames from "./useGames";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

let Wrapper: ({ children }: WrapperProps) => JSX.Element;

Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given the useGames custom hook", () => {
  describe("When getAllGames it's called", () => {
    describe("And fetch resolve with a list of games", () => {
      test("Then dispatch must be called with action loadGames", async () => {
        const { result } = renderHook(() => useGames(), {
          wrapper: Wrapper,
        });

        await result.current.getAllGames();

        expect(mockDispatch).toHaveBeenCalledWith(loadGamesActionCreator([]));
      });
    });

    describe("And fetch have an error", () => {
      test("Then dispatch must be called with action openModal", async () => {
        const { result } = renderHook(() => useGames(), {
          wrapper: Wrapper,
        });

        await result.current.getAllGames();

        expect(mockDispatch).toHaveBeenCalledWith(
          openModalActionCreator({
            message: "¡Algo ha salido mal!",
            type: false,
          })
        );
      });
    });
  });

  describe("When deleteGame it's called", () => {
    describe("And fetch is done with existent id game", () => {
      test("Then dispatch must be called with delete action openModal with id '2'", async () => {
        const payloadDelete = "2";

        const { result } = renderHook(() => useGames(), {
          wrapper: Wrapper,
        });
        await result.current.deleteGame("2");

        expect(mockDispatch).toHaveBeenCalledWith(
          deleteGameActionCreator(payloadDelete)
        );
      });

      test("Then dispatch must be called with correct action openModal", async () => {
        const payloadModal = { message: "Juego borrado", type: true };

        const { result } = renderHook(() => useGames(), {
          wrapper: Wrapper,
        });
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

        const { result } = renderHook(() => useGames(), {
          wrapper: Wrapper,
        });
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
          players: "",
          synopsis: "",
          release: "",
          owner: "2",
          id: "1",
        };
        const { result } = renderHook(() => useGames(), {
          wrapper: Wrapper,
        });
        await result.current.createGame(correctFormGameData);

        expect(mockDispatch).toHaveBeenCalledWith(
          createGameActionCreator(payloadActionCreator)
        );
      });

      test("Then dispatch must be called with correct action openModal", async () => {
        const payloadModal = { message: "Juego creado", type: true };

        const { result } = renderHook(() => useGames(), {
          wrapper: Wrapper,
        });
        await result.current.createGame(correctFormGameData);

        expect(mockDispatch).toHaveBeenCalledWith(
          openModalActionCreator(payloadModal)
        );
      });

      test("Then navigate must be called with '/mis-juegos'", async () => {
        const navigatePath = "/mis-juegos";

        const { result } = renderHook(() => useGames(), {
          wrapper: Wrapper,
        });
        await result.current.createGame(correctFormGameData);

        expect(mockNavigate).toHaveBeenCalledWith(navigatePath);
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

        const { result } = renderHook(() => useGames(), {
          wrapper: Wrapper,
        });
        await result.current.createGame(incorrectFormGameData);

        expect(mockDispatch).toHaveBeenCalledWith(
          openModalActionCreator(payloadErrorModal)
        );
      });
    });
  });
});
