import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event/";
import { store } from "../../store/store";
import { toggleMenuActionCreator } from "../../store/UI/UISlice";
import customRender from "../../testUtils/wrappers/customRender/customRender";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show Lohealthy Games in heading", () => {
      customRender(<Header />);

      const title = screen.getByRole("heading", { name: "Lohealthy Games" });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show a button", () => {
      customRender(<Header />, { store });

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });

    describe("And users click on button", () => {
      test("Then it should be called the function", async () => {
        const mockDispatch = jest.fn();

        customRender(<Header />, { dispatch: mockDispatch });

        const button = screen.getByRole("button");
        await userEvent.click(button);

        expect(mockDispatch).toHaveBeenCalledWith(toggleMenuActionCreator());
      });
    });
  });
});
