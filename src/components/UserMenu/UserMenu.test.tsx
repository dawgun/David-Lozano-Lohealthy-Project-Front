import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  initialUserState,
  mockStore,
} from "../../testUtils/mocks/mockStore/mockStore";
import customRender from "../../testUtils/wrappers/customRender/customRender";
import UserMenu from "./UserMenu";

const mockuserLogout = jest.fn();
const mockDispatch = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  userLogout: mockuserLogout,
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given the UserMenu component", () => {
  describe("When user is not logged", () => {
    test("Then should show two nav links", async () => {
      const expectedLenght = 2;

      customRender(<UserMenu />);

      const navlinks = await screen.findAllByRole("link");

      expect(navlinks).toHaveLength(expectedLenght);
    });

    describe("And user click on 'Registrar' or 'Login'", () => {
      test("Then should functions has been called", async () => {
        const calledTimes = 2;

        customRender(<UserMenu />);

        const navlinks = await screen.findAllByRole("link");
        await userEvent.click(navlinks[0]);
        await userEvent.click(navlinks[1]);

        expect(mockDispatch).toHaveBeenCalledTimes(calledTimes);
      });
    });
  });

  describe("When user is logged", () => {
    const storeWithUserLogged = mockStore({
      userPreloadState: {
        isLogged: true,
        user: { ...initialUserState.user, userName: "Nachus", image: "" },
      },
    });

    test("Then should show an user name 'Nachus' and image with alternativeText 'Profile pic representing user'", async () => {
      const userName = "Nachus";
      const alternativeText = "Profile pic representing user";

      customRender(<UserMenu />, { store: storeWithUserLogged });

      const text = screen.getByText(userName);
      const image = screen.getByRole("img", { name: alternativeText });

      expect(text).toBeInTheDocument();
      expect(image).toBeInTheDocument();
    });

    describe("And user click on button 'Logout'", () => {
      test("Then should have been called userLogout function", async () => {
        const logoutText = "Logout";

        customRender(<UserMenu />, { store: storeWithUserLogged });

        const button = screen.getByRole("button", { name: logoutText });
        await userEvent.click(button);

        expect(mockuserLogout).toHaveBeenCalled();
      });
    });
  });
});
