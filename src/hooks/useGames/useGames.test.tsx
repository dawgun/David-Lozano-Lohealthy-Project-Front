import { renderHook } from "@testing-library/react";
import { loadGamesActionCreator } from "../../store/games/gamesSlice";
import { openModalActionCreator } from "../../store/UI/UISlice";
import useGames from "./useGames";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given the useGames custom hook", () => {
  describe("When getAllGames it's called", () => {
    describe("And fetch resolve with a list of games", () => {
      test("Then dispatch must be called with action loadGames", async () => {
        const { result } = renderHook(() => useGames());

        await result.current.getAllGames();

        expect(mockDispatch).toHaveBeenCalledWith(loadGamesActionCreator([]));
      });
    });

    describe("And fetch have an error", () => {
      test("Then dispatch must be called with action openModal", async () => {
        const { result } = renderHook(() => useGames());

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
});
