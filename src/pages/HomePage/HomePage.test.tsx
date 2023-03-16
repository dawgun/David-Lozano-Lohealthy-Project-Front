import { screen } from "@testing-library/react";
import HomePage from "./HomePage";
import customRender from "../../testUtils/wrappers/customRender/customRender";
import {
  initialGameState,
  mockStore,
} from "../../testUtils/mocks/mockStore/mockStore";

describe("Given the HomePage page", () => {
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
      const storeWithMario = mockStore({
        gamesPreloadState: {
          ...initialGameState,
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

      customRender(<HomePage />, { store: storeWithMario });

      const homeTitle = screen.getByRole("heading", {
        name: gameHeading,
      });

      expect(homeTitle).toBeInTheDocument();
    });

    describe("And total pages is '1'", () => {
      test("Then shouldn't show 'ᐸ' in a button", () => {
        const textButton = "ᐸ";

        customRender(<HomePage />);

        const previousButton = screen.queryByRole("button", {
          name: textButton,
        });

        expect(previousButton).not.toBeInTheDocument();
      });
    });

    describe("And total pages is '2'", () => {
      test("Then should show 'ᐸ' in a button", () => {
        const totalPages = 2;
        const textButton = "ᐸ";
        const storeWithMorePages = mockStore({
          gamesPreloadState: { ...initialGameState, totalPages },
        });

        customRender(<HomePage />, { store: storeWithMorePages });

        const previousButton = screen.queryByRole("button", {
          name: textButton,
        });

        expect(previousButton).toBeInTheDocument();
      });
    });
  });
});
