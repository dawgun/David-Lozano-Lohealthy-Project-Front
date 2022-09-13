import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import HomePage from "./HomePage";
import userEvent from "@testing-library/user-event";
import {
  nextPageActionCreator,
  previousPageActionCreator,
} from "../../store/games/gamesSlice";

const mockDispatch = jest.fn();
let mockSelectorReturn = {
  isNextPage: true,
  isPreviousPage: true,
  currentPage: 1,
  totalPages: 2,
  user: { id: "1" },
  games: {
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
      },
    ],
  },
};

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockSelectorReturn,
  useDispatch: () => mockDispatch,
}));

describe("Given the HomePage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Home' in a heading", () => {
      const homeHeading = "Home";
      render(
        <Provider store={store}>
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        </Provider>
      );
      const homeTitle = screen.getByRole("heading", {
        name: homeHeading,
      });

      expect(homeTitle).toBeInTheDocument();
    });

    test("Then should show 'Super Mario' in a heading", () => {
      const gameHeading = "Super Mario";
      render(
        <Provider store={store}>
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        </Provider>
      );
      const homeTitle = screen.getByRole("heading", {
        name: gameHeading,
      });

      expect(homeTitle).toBeInTheDocument();
    });

    describe("And user click on button next page 'ᐳ'", () => {
      test("Then dispatch has to been called with nextPage action", async () => {
        const textButton = "ᐳ";
        const nextPageAction = nextPageActionCreator();

        render(
          <Provider store={store}>
            <BrowserRouter>
              <HomePage />
            </BrowserRouter>
          </Provider>
        );
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

        render(
          <Provider store={store}>
            <BrowserRouter>
              <HomePage />
            </BrowserRouter>
          </Provider>
        );
        const button = screen.getByRole("button", {
          name: textButton,
        });
        await userEvent.click(button);

        expect(mockDispatch).toHaveBeenCalledWith(previousPageAction);
      });
    });
  });
});
