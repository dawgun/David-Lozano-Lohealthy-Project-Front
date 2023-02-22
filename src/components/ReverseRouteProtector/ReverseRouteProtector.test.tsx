import { screen } from "@testing-library/react";
import LoginPage from "../../pages/LoginPage/LoginPage";
import {
  initialUserState,
  mockStore,
} from "../../testUtils/mocks/mockStore/mockStore";
import customRender from "../../testUtils/wrappers/customRender/customRender";
import ReverseRouteProtector from "./ReverseRouteProtector";

describe("Given the ReverseRouteProtector component", () => {
  const textTitle = "Login";

  describe("When it's instantiated with user not logged and login page", () => {
    test("Then should show 'Login' in a heading", () => {
      customRender(
        <ReverseRouteProtector>
          <LoginPage />
        </ReverseRouteProtector>
      );

      const loginTitle = screen.getByRole("heading", { name: textTitle });

      expect(loginTitle).toBeInTheDocument();
    });
  });

  describe("When it's instantiated with user logged and login page", () => {
    test("Then shouldn't show 'Login' in a heading", () => {
      const storeWithUserLogged = mockStore({
        userPreloadState: { ...initialUserState, isLogged: true },
      });

      customRender(
        <ReverseRouteProtector>
          <LoginPage />
        </ReverseRouteProtector>,
        { store: storeWithUserLogged }
      );

      const loginTitle = screen.queryByRole("heading", { name: textTitle });

      expect(loginTitle).not.toBeInTheDocument();
    });
  });
});
