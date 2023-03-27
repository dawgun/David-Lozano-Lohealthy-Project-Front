import "../../testUtils/mocks/mockReact/mockReact";
import mockUseGames from "../../testUtils/mocks/mockUseGames/mockUseGames";
import { screen } from "@testing-library/react";
import UpdateGamePage from "./UpdateGamePage";
import customRender from "../../testUtils/wrappers/customRender/customRender";
import pathRoutes from "../../utils/pathRoutes/pathRoutes";

describe("Given the UpdateGamePage page", () => {
  describe("When it's instantiated", () => {
    test("Then getGameById should be called with id '412351'", () => {
      const paramPath = "412351";
      const { myGames, updateGame } = pathRoutes;

      customRender(<UpdateGamePage />, {
        initialEntries: [`${myGames}${updateGame}/${paramPath}`],
        path: `${myGames}${updateGame}/:idGame`,
      });

      expect(mockUseGames.getGameById).toHaveBeenCalledWith(paramPath);
    });

    test("Then should show 'Update' in a heading level 2", () => {
      const title = "Update";
      const headingLevel = 2;

      customRender(<UpdateGamePage />);

      const headingUpdatePage = screen.getByRole("heading", {
        name: title,
        level: headingLevel,
      });

      expect(headingUpdatePage).toBeInTheDocument();
    });

    test("Then should show 'Autor' in a heading", () => {
      const titleAuth = "Autor";

      customRender(<UpdateGamePage />);
      const title = screen.getByRole("heading", { name: titleAuth });

      expect(title).toBeInTheDocument();
    });
  });
});
