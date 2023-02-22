import { screen } from "@testing-library/react";
import HomePage from "./HomePage";
import userEvent from "@testing-library/user-event";
import {
  nextPageActionCreator,
  previousPageActionCreator,
} from "../../store/games/gamesSlice";
import customRender from "../../testUtils/wrappers/customRender/customRender";
import {
  initialGameState,
  mockStore,
} from "../../testUtils/mocks/mockStore/mockStore";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given the HomePage page", () => {
  const store = mockStore({
    gamesPreloadState: {
      ...initialGameState,
      isNextPage: false,
      isPreviousPage: false,
      games: [
        {
          title: "Super Mario",
          image: "mario.jpg",
          players: "",
          genre: "",
          release: "",
          synopsis:
            "Un divertido fontanero con bigote y traje rojo, se aventura a salvar a la princesa del reino Champiñon",
          id: "1",
          owner: "2",
          backupImage: "",
        },
      ],
    },
  });

  describe("When it's instantiated", () => {
    test("Then should show 'Home' in a heading", () => {
      const homeHeading = "Home";

      customRender(<HomePage />);

      const homeTitle = screen.getByRole("heading", {
        name: homeHeading,
      });

      expect(homeTitle).toBeInTheDocument();
    });

    test("Then should show 'Super Mario' in a heading", () => {
      const gameHeading = "Super Mario";

      customRender(<HomePage />, { store });

      const homeTitle = screen.getByRole("heading", {
        name: gameHeading,
      });

      expect(homeTitle).toBeInTheDocument();
    });

    describe("And user click on button next page 'ᐳ'", () => {
      test("Then dispatch has to been called with nextPage action", async () => {
        const textButton = "ᐳ";
        const nextPageAction = nextPageActionCreator();

        customRender(<HomePage />);

        const button = screen.getByRole("button", {
          name: textButton,
        });
        await userEvent.click(button);

        expect(mockDispatch).toHaveBeenCalledWith(nextPageAction);
      });
    });

    describe("And user click on button previous page 'ᐸ'", () => {
      test("Then dispatch has to been called with nextPage action", async () => {
        const textButton = "ᐸ";
        const previousPageAction = previousPageActionCreator();

        customRender(<HomePage />);

        const button = screen.getByRole("button", {
          name: textButton,
        });
        await userEvent.click(button);

        expect(mockDispatch).toHaveBeenCalledWith(previousPageAction);
      });
    });

    describe("And user click on button next page when there isn't more pages 'ᐳ'", () => {
      test("Then dispatch has to been not called with nextPage action", async () => {
        const textButton = "ᐳ";
        const nextPageAction = nextPageActionCreator();

        customRender(<HomePage />, { store });

        const button = screen.getByRole("button", {
          name: textButton,
        });
        await userEvent.click(button);

        expect(mockDispatch).not.toHaveBeenCalledWith(nextPageAction);
      });
    });

    describe("And user click on button previous page when there isn't more pages 'ᐸ'", () => {
      test("Then dispatch has to been called with nextPage action", async () => {
        const textButton = "ᐸ";
        const previousPageAction = previousPageActionCreator();

        customRender(<HomePage />, { store });

        const button = screen.getByRole("button", {
          name: textButton,
        });
        await userEvent.click(button);

        expect(mockDispatch).not.toHaveBeenCalledWith(previousPageAction);
      });
    });
  });
});
