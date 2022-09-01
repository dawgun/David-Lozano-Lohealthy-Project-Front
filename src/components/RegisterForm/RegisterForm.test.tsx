import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterForm from "./RegisterForm";

const mockuserRegister = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  userRegister: mockuserRegister,
}));

describe("Given the Register component", () => {
  describe("When it's instantiated", () => {
    const userNamePlaceholder = "Username";
    const emailPlaceholder = "Email";
    const passwordPlaceholder = "Password";
    const passwordRepeatPlaceholder = "Repeat password";

    const userNameTextInput = "Adamov";
    const emailTextInput = "nachus@hotmail.com";
    const passwordTextInput = "12345";
    const passwordRepeatTextInput = "12345";

    test("Then should show userName, email, password and password repeat inputs", () => {
      render(<RegisterForm />);
      const userNameInput = screen.getByPlaceholderText(userNamePlaceholder);
      const userEmailInput = screen.getByPlaceholderText(emailPlaceholder);
      const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);
      const userPasswordRepeatInput = screen.getByPlaceholderText(
        passwordRepeatPlaceholder
      );

      expect(userNameInput).toBeInTheDocument();
      expect(userEmailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(userPasswordRepeatInput).toBeInTheDocument();
    });

    describe("And user type 'Dan' in userName input", () => {
      test("Then should show 'Dan' in userName input", async () => {
        render(<RegisterForm />);

        const userNameInput = screen.getByPlaceholderText(userNamePlaceholder);
        await userEvent.type(userNameInput, userNameTextInput);

        expect(userNameInput).toHaveValue(userNameTextInput);
      });
    });

    describe("And user type 'nachus@hotmail.com' in email input", () => {
      test("Then should show 'nachus@hotmail.com' in email input", async () => {
        render(<RegisterForm />);

        const emailInput = screen.getByPlaceholderText(emailPlaceholder);
        await userEvent.type(emailInput, emailTextInput);

        expect(emailInput).toHaveValue(emailTextInput);
      });
    });

    describe("And user type '12345' in password input", () => {
      test("Then should show '12345' in password input", async () => {
        render(<RegisterForm />);

        const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);
        await userEvent.type(passwordInput, passwordTextInput);

        expect(passwordInput).toHaveValue(passwordTextInput);
      });
    });

    describe("And user type '12345' in repeat password input", () => {
      test("Then should show '12345' in repeat password input", async () => {
        render(<RegisterForm />);
        const passwordRepeatInput = screen.getByPlaceholderText(
          passwordRepeatPlaceholder
        );
        await userEvent.type(passwordRepeatInput, passwordRepeatTextInput);

        expect(passwordRepeatInput).toHaveValue(passwordRepeatTextInput);
      });
    });

    describe("And user doesn't type and click on register button", () => {
      test("Then it doesn't call userRegister function", async () => {
        render(<RegisterForm />);
        const button = screen.getByRole("button", { name: "Crear cuenta" });
        await userEvent.click(button);

        expect(mockuserRegister).not.toHaveBeenCalled();
      });
    });

    describe("And user types correctly in form and click on register button", () => {
      test("Then it call userRegister function", async () => {
        render(<RegisterForm />);
        const button = screen.getByRole("button", {
          name: "Crear cuenta",
        });
        const userNameInput = screen.getByPlaceholderText(userNamePlaceholder);
        const emailInput = screen.getByPlaceholderText(emailPlaceholder);
        const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);
        const passwordRepeatInput = screen.getByPlaceholderText(
          passwordRepeatPlaceholder
        );

        await userEvent.type(userNameInput, userNameTextInput);
        await userEvent.type(emailInput, emailTextInput);
        await userEvent.type(passwordInput, passwordTextInput);
        await userEvent.type(passwordRepeatInput, passwordRepeatTextInput);
        await userEvent.click(button);

        expect(mockuserRegister).toHaveBeenCalled();
      });
    });
  });
});
