import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import GameCardDetails from "./GameCardDetails";

let mockSelectorReturn = {
  user: {
    id: "1",
  },
};

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockSelectorReturn,
}));

const game = {
  title: "The Legend of Zelda",
  image: "zelda.jpg",
  backupImage: "backup-zelda.jpg",
  players: "Un jugador",
  genre: "RPG",
  release: "2022-09-16T00:00:00.000Z",
  synopsis:
    "El primer juego de zelda donde aparece la princesa secuestrada y todos lo quieren matar.",
  id: "1",
  owner: {
    userName: "dawgun",
    id: "2",
  },
};

describe("Given the GameCard component", () => {
  describe("When it's instantiated", () => {
    describe("And user not owner of game", () => {
      test("Then should show six headings in page", () => {
        const numberOfHeadings = 6;

        render(
          <Provider store={store}>
            <GameCardDetails game={game} />
          </Provider>
        );
        const listOfHeadings = screen.getAllByRole("heading");

        expect(listOfHeadings).toHaveLength(numberOfHeadings);
      });

      test("Then should show an image with alternative text of game", () => {
        const alternativeText = game.title + " game";

        render(
          <Provider store={store}>
            <GameCardDetails game={game} />
          </Provider>
        );
        const gameImage = screen.getByRole("img", { name: alternativeText });

        expect(gameImage).toBeInTheDocument();
      });

      test("Then should show the title 'The Legend of Zelda' in a heading", () => {
        const title = "The Legend of Zelda";

        render(
          <Provider store={store}>
            <GameCardDetails game={game} />
          </Provider>
        );
        const gameTitle = screen.getByRole("heading", { name: title });

        expect(gameTitle).toBeInTheDocument();
      });

      test("Then should show author of game 'dawgun'", () => {
        const authorName = "dawgun";

        render(
          <Provider store={store}>
            <GameCardDetails game={game} />
          </Provider>
        );
        const authorText = screen.getByText(authorName);

        expect(authorText).toBeInTheDocument();
      });

      test("Then should show genre of game 'RPG'", () => {
        const genreGame = "RPG";

        render(
          <Provider store={store}>
            <GameCardDetails game={game} />
          </Provider>
        );
        const genreText = screen.getByText(genreGame);

        expect(genreText).toBeInTheDocument();
      });

      test("Then should show release '2022-09-16'", () => {
        const releaseDate = "2022-09-16";

        render(
          <Provider store={store}>
            <GameCardDetails game={game} />
          </Provider>
        );
        const release = screen.getByText(releaseDate);

        expect(release).toBeInTheDocument();
      });

      test("Then should show players 'Un jugador'", () => {
        const numberOfPlayers = "Un jugador";

        render(
          <Provider store={store}>
            <GameCardDetails game={game} />
          </Provider>
        );
        const players = screen.getByText(numberOfPlayers);

        expect(players).toBeInTheDocument();
      });

      test("Then should show the synopsys", () => {
        const title = `${game.synopsis}`;

        render(
          <Provider store={store}>
            <GameCardDetails game={game} />
          </Provider>
        );
        const gameSynopsis = screen.getByText(title);

        expect(gameSynopsis).toBeInTheDocument();
      });
    });
  });
});
