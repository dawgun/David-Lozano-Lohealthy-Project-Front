import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import LoginForm from "./LoginForm";

const mockuserLogin = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  userLogin: mockuserLogin,
}));

describe("Given the Register component", () => {
  describe("When it's instantiated", () => {
    const userNamePlaceholder = "Usuario";
    const passwordPlaceholder = "Contraseña";

    const userNameTextInput = "Adamov";
    const passwordTextInput = "12345";

    test("Then should show userName and password inputs", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm />
          </BrowserRouter>
        </Provider>
      );
      const userNameInput = screen.getByPlaceholderText(userNamePlaceholder);
      const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);

      expect(userNameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });

    describe("And user type 'Dan' in userName input", () => {
      test("Then should show 'Dan' in userName input", async () => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <LoginForm />
            </BrowserRouter>
          </Provider>
        );

        const userNameInput = screen.getByPlaceholderText(userNamePlaceholder);
        await userEvent.type(userNameInput, userNameTextInput);

        expect(userNameInput).toHaveValue(userNameTextInput);
      });
    });

    describe("And user type '12345' in password input", () => {
      test("Then should show '12345' in password input", async () => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <LoginForm />
            </BrowserRouter>
          </Provider>
        );

        const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);
        await userEvent.type(passwordInput, passwordTextInput);

        expect(passwordInput).toHaveValue(passwordTextInput);
      });
    });

    describe("And user doesn't type and click on register button", () => {
      test("Then it doesn't call userLogin function", async () => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <LoginForm />
            </BrowserRouter>
          </Provider>
        );
        const button = screen.getByRole("button", { name: "Login" });
        await userEvent.click(button);

        expect(mockuserLogin).not.toHaveBeenCalled();
      });
    });

    describe("And user types correctly in form and click on register button", () => {
      test("Then it call userLogin function", async () => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <LoginForm />
            </BrowserRouter>
          </Provider>
        );
        const button = screen.getByRole("button", {
          name: "Login",
        });
        const userNameInput = screen.getByPlaceholderText(userNamePlaceholder);
        const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);

        await userEvent.type(userNameInput, userNameTextInput);
        await userEvent.type(passwordInput, passwordTextInput);
        await userEvent.click(button);

        expect(mockuserLogin).toHaveBeenCalled();
      });
    });
  });
});
