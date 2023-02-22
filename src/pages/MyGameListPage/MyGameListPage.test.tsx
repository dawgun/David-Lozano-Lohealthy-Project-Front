import mockUseGames from "../../testUtils/mocks/mockUseGames/mockUseGames";
import { screen } from "@testing-library/react";
import MyGameListPage from "./MyGameListPage";
import userEvent from "@testing-library/user-event";
import customRender from "../../testUtils/wrappers/customRender/customRender";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given MyGameListPage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Mis Juegos' in a heading", () => {
      const titleHeading = "Mis Juegos";

      customRender(<MyGameListPage />);

      const title = screen.getByRole("heading", { name: titleHeading });

      expect(title).toBeInTheDocument();
    });

    test("Then should getGamesByUser be called", () => {
      customRender(<MyGameListPage />);

      expect(mockUseGames.getGamesByUser).toHaveBeenCalledWith();
    });

    test("Then should show 'Crear Juego' in a button", () => {
      const textButton = "Crear Juego";

      customRender(<MyGameListPage />);

      const button = screen.getByRole("button", { name: textButton });

      expect(button).toBeInTheDocument();
    });

    describe("And user clicks on button 'Crear Juego'", () => {
      test("Then navigate should be called", async () => {
        const textButton = "Crear Juego";
        const pathNavigate = "/mis-juegos/create";

        customRender(<MyGameListPage />);

        const button = screen.getByRole("button", { name: textButton });
        await userEvent.click(button);

        expect(mockNavigate).toHaveBeenCalledWith(pathNavigate);
      });
    });
  });
});
