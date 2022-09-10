import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";
import { store } from "../../store/store";
import RouteProtector from "./RouteProtector";

let mockSelectorReturn = {
  isLogged: true,
};

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockSelectorReturn,
}));

describe("Given the RouteProtector component", () => {
  const textTitle = "Login";

  describe("When it's instantiated with user logged and login page", () => {
    test("Then should show 'Login' in a heading", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <RouteProtector>
              <LoginPage />
            </RouteProtector>
          </BrowserRouter>
        </Provider>
      );
      const loginTitle = screen.getByRole("heading", { name: textTitle });

      expect(loginTitle).toBeInTheDocument();
    });
  });

  describe("When it's instantiated with user not logged and login page", () => {
    test("Then shouldn't show 'Login' in a heading", () => {
      mockSelectorReturn.isLogged = false;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <RouteProtector>
              <LoginPage />
            </RouteProtector>
          </BrowserRouter>
        </Provider>
      );
      const loginTitle = screen.queryByRole("heading", { name: textTitle });

      expect(loginTitle).not.toBeInTheDocument();
    });
  });
});
