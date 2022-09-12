import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import GameCard from "./GameCard";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

let mockSelectorReturn = {
  user: {
    id: "1",
  },
};

const mockDeleteGame = jest.fn();
const mockNavigate = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockSelectorReturn,
}));

jest.mock("../../hooks/useGames/useGames", () => () => ({
  deleteGame: mockDeleteGame,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const game = {
  title: "The Legend of Zelda",
  image: "zelda.jpg",
  backupImage: "backup-zelda.jpg",
  players: "One Player",
  genre: "RPG",
  release: "88/08/23",
  synopsis:
    "El primer juego de zelda donde aparece la princesa secuestrada y todos lo quieren matar.",
  id: "1",
  owner: "2",
};

describe("Given the GameCard component", () => {
  describe("When it's instantiated", () => {
    describe("And user not owner of game", () => {
      test("Then should show an image with alternative text of game", () => {
        const alternativeText = game.title + " game";

        render(
          <Provider store={store}>
            <BrowserRouter>
              <GameCard game={game} />
            </BrowserRouter>
          </Provider>
        );
        const gameImage = screen.getByRole("img", { name: alternativeText });

        expect(gameImage).toBeInTheDocument();
      });

      test("Then should show the title 'The Legend of Zelda' in a heading", () => {
        const title = "The Legend of Zelda";

        render(
          <Provider store={store}>
            <BrowserRouter>
              <GameCard game={game} />
            </BrowserRouter>
          </Provider>
        );
        const gameTitle = screen.getByRole("heading", { name: title });

        expect(gameTitle).toBeInTheDocument();
      });

      test("Then should show the synopsys cutted", () => {
        const title = `${game.synopsis.slice(0, 100)}...`;

        render(
          <Provider store={store}>
            <BrowserRouter>
              <GameCard game={game} />
            </BrowserRouter>
          </Provider>
        );
        const gameSynopsis = screen.getByText(title);

        expect(gameSynopsis).toBeInTheDocument();
      });

      test("Then should show a button with text 'Info'", () => {
        const textButton = "Info";

        render(
          <Provider store={store}>
            <BrowserRouter>
              <GameCard game={game} />
            </BrowserRouter>
          </Provider>
        );
        const gameButton = screen.getByRole("button", { name: textButton });

        expect(gameButton).toBeInTheDocument();
      });

      test("Then don't show button with 'X'", () => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <GameCard game={game} />
            </BrowserRouter>
          </Provider>
        );

        const button = screen.queryByRole("button", { name: "X" });

        expect(button).not.toBeInTheDocument();
      });
    });

    describe("And user is owner of game owner", () => {
      const iconId = "delete-icon";

      test("Then show button with icon 'X'", () => {
        mockSelectorReturn.user.id = "2";

        render(
          <Provider store={store}>
            <BrowserRouter>
              <GameCard game={game} />
            </BrowserRouter>
          </Provider>
        );

        const buttonDelete = screen.getByTestId(iconId);

        expect(buttonDelete).toBeInTheDocument();
      });

      test("Then deleteGame is called when button is clicked", async () => {
        mockSelectorReturn.user.id = "2";

        render(
          <Provider store={store}>
            <BrowserRouter>
              <GameCard game={game} />
            </BrowserRouter>
          </Provider>
        );
        const buttonDelete = screen.getByTestId(iconId);
        await userEvent.click(buttonDelete);

        expect(mockDeleteGame).toHaveBeenCalledWith(game.id);
      });
    });

    describe("And original image throw an error", () => {
      test("Then should show the image backup", () => {
        const alternativeText = game.title + " game";

        render(
          <Provider store={store}>
            <BrowserRouter>
              <GameCard game={game} />
            </BrowserRouter>
          </Provider>
        );
        const gameImage = screen.getByRole("img", {
          name: alternativeText,
        });
        fireEvent.error(gameImage);

        expect(gameImage.getAttribute("src")).toBe(game.backupImage);
      });
    });

    describe("And users click on 'Info' button", () => {
      test("Then navigate has to been called with '/details/1'", async () => {
        const navigatePath = "/details/1";
        const textButton = "Info";

        render(
          <Provider store={store}>
            <BrowserRouter>
              <GameCard game={game} />
            </BrowserRouter>
          </Provider>
        );
        const infoButton = screen.getByRole("button", {
          name: textButton,
        });
        await userEvent.click(infoButton);

        expect(mockNavigate).toHaveBeenCalledWith(navigatePath);
      });
    });
  });
});
