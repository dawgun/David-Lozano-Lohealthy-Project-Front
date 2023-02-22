import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { closeMenuActionCreator } from "../../store/UI/UISlice";
import customRender from "../../testUtils/wrappers/customRender/customRender";
import Navigation from "./Navigation";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given the Navigation component", () => {
  const alternativeTextHome = "Home icon";
  const myGamesText = "Mis Juegos";

  describe("When it's instantiated", () => {
    test("Then it should show a house icon inside nav bar with alternative text 'Home icon'", () => {
      customRender(<Navigation />);

      const navHome = screen.getByRole("link", { name: alternativeTextHome });

      expect(navHome).toBeInTheDocument();
    });

    test("Then it should show 'Mis Juegos' inside nav bar", () => {
      customRender(<Navigation />);

      const navMygames = screen.getByRole("link", {
        name: myGamesText,
      });

      expect(navMygames).toBeInTheDocument();
    });

    describe("And user clicks on home icon", () => {
      test("Then dispatch it would be called with closeMenu action", async () => {
        customRender(<Navigation />);

        const navHome = screen.getByRole("link", {
          name: alternativeTextHome,
        });

        await userEvent.click(navHome);

        expect(mockDispatch).toHaveBeenCalledWith(closeMenuActionCreator());
      });
    });

    describe("And user clicks on 'Mis Juegos'", () => {
      test("Then dispatch it would be called with closeMenu action", async () => {
        customRender(<Navigation />);

        const navMygames = screen.getByRole("link", {
          name: myGamesText,
        });

        await userEvent.click(navMygames);

        expect(mockDispatch).toHaveBeenCalledWith(closeMenuActionCreator());
      });
    });
  });
});
