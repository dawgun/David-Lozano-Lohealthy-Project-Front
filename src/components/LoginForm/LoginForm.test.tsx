import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

describe("Given the Register component", () => {
  describe("When it's instantiated", () => {
    const userNamePlaceholder = "Usuario";
    const passwordPlaceholder = "Contraseña";

    const userNameTextInput = "Adamov";
    const passwordTextInput = "12345";

    test("Then should show userName and password inputs", () => {
      render(<LoginForm />);
      const userNameInput = screen.getByPlaceholderText(userNamePlaceholder);
      const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);

      expect(userNameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });

    describe("And user type 'Dan' in userName input", () => {
      test("Then should show 'Dan' in userName input", async () => {
        render(<LoginForm />);

        const userNameInput = screen.getByPlaceholderText(userNamePlaceholder);
        await userEvent.type(userNameInput, userNameTextInput);

        expect(userNameInput).toHaveValue(userNameTextInput);
      });
    });

    describe("And user type '12345' in password input", () => {
      test("Then should show '12345' in password input", async () => {
        render(<LoginForm />);

        const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);
        await userEvent.type(passwordInput, passwordTextInput);

        expect(passwordInput).toHaveValue(passwordTextInput);
      });
    });
  });
});
