import mockUseGames from "../../testUtils/mocks/mockUseGames/mockUseGames";
import mockReactRouter from "../../testUtils/mocks/mockReactRouter/mockReactRouter";
import { screen } from "@testing-library/react";
import GameCard from "./GameCard";
import userEvent from "@testing-library/user-event";
import {
  mockStore,
  initialUserState,
} from "../../testUtils/mocks/mockStore/mockStore";
import customRender from "../../testUtils/wrappers/customRender/customRender";

describe("Given the GameCard component", () => {
  describe("When it's instantiated", () => {
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

    describe("And user not owner of game", () => {
      test("Then should show an image with alternative text of game", () => {
        const alternativeText = game.title + " game";

        customRender(<GameCard game={game} />);

        const gameImage = screen.getByRole("img", { name: alternativeText });

        expect(gameImage).toBeInTheDocument();
      });

      test("Then should show the title 'The Legend of Zelda' in a heading", () => {
        const title = "The Legend of Zelda";

        customRender(<GameCard game={game} />);

        const gameTitle = screen.getByRole("heading", { name: title });

        expect(gameTitle).toBeInTheDocument();
      });

      test("Then should show the synopsys cutted", () => {
        const title = `${game.synopsis.slice(0, 80)}...`;

        customRender(<GameCard game={game} />);

        const gameSynopsis = screen.getByText(title);

        expect(gameSynopsis).toBeInTheDocument();
      });

      test("Then don't show button with 'X'", () => {
        customRender(<GameCard game={game} />);

        const button = screen.queryByRole("button", { name: "X" });

        expect(button).not.toBeInTheDocument();
      });
    });

    describe("And user is owner of game owner", () => {
      const customStore = mockStore({
        userPreloadState: {
          ...initialUserState,
          user: { ...initialUserState.user, id: "2" },
        },
      });

      test("Then show button with text '✗'", () => {
        const buttonText = "✗";

        customRender(<GameCard game={game} />, { store: customStore });

        const buttonDelete = screen.getByText(buttonText);

        expect(buttonDelete).toBeInTheDocument();
      });

      test("Then deleteGame is called when button is clicked", async () => {
        const buttonText = "✗";

        customRender(<GameCard game={game} />, { store: customStore });

        const buttonDelete = screen.getByText(buttonText);
        await userEvent.click(buttonDelete);

        expect(mockUseGames.deleteGame).toHaveBeenCalledWith(game.id);
      });
    });

    describe("And stay in '/home' path and users click on 'Info' button", () => {
      test("Then navigate has to been called with '/details/1'", async () => {
        const navigatePath = "/details/1";
        const textButton = "Info";
        const actualPath = "/home";

        customRender(<GameCard game={game} />, {
          initialEntries: [actualPath],
        });

        const infoButton = screen.getByRole("button", {
          name: textButton,
        });
        await userEvent.click(infoButton);

        expect(mockReactRouter.useNavigate).toHaveBeenCalledWith(navigatePath);
      });
    });

    describe("And stay in '/mis-juegos' path and users click on 'Info' button", () => {
      test("Then should show a button with text 'Edit'", async () => {
        const textButton = "Edit";
        const actualPath = "/mis-juegos";

        customRender(<GameCard game={game} />, {
          initialEntries: [actualPath],
        });

        const editButton = screen.getByRole("button", {
          name: textButton,
        });

        expect(editButton).toBeInTheDocument();
      });

      test("Then navigate has to been called with '/mis-juegos/update/1'", async () => {
        const navigatePath = "/mis-juegos/update/1";
        const textButton = "Edit";
        const actualPath = "/mis-juegos";

        customRender(<GameCard game={game} />, {
          initialEntries: [actualPath],
        });

        const infoButton = screen.getByRole("button", {
          name: textButton,
        });
        await userEvent.click(infoButton);

        expect(mockReactRouter.useNavigate).toHaveBeenCalledWith(navigatePath);
      });
    });
  });
});
