import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import customRender from "../../testUtils/wrappers/customRender/customRender";
import Button from "./Button";

describe("Given the Button component", () => {
  describe("When it's instantiated with text 'Login'", () => {
    test("Then should show a button with received text 'Login'", () => {
      const buttonText = "Login";
      customRender(<Button text="Login" />);

      const loginButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(loginButton).toBeInTheDocument();
    });
  });

  describe("When it's instantiated with an action and user clicks on button", () => {
    test("Then the received action should be called", async () => {
      const mockActionButton = jest.fn();

      customRender(<Button text="" onClick={mockActionButton} />);

      const testButton = screen.getByRole("button");
      await userEvent.click(testButton);

      expect(mockActionButton).toHaveBeenCalled();
    });
  });

  describe("When it's instantiated and disabled", () => {
    test("Then button should be disabled", () => {
      customRender(<Button text="" isDisabled />);

      const testButton = screen.getByRole("button");

      expect(testButton).toBeDisabled();
    });
  });
});
