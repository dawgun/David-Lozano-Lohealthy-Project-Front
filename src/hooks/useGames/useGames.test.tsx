import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { loadGamesActionCreator } from "../../store/games/gamesSlice";
import { store } from "../../store/store";
import { openModalActionCreator } from "../../store/UI/UISlice";
import useGames from "./useGames";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

let Wrapper: ({ children }: WrapperProps) => JSX.Element;

Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
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
});
