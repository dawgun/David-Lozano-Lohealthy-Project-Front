import mockDispatch from "../../testUtils/mocks/mockDispatch/mockDispatch";
import { screen } from "@testing-library/react";
import { loginUserActionCreator } from "../../store/user/userSlice";
import {
  initialUiState,
  mockStore,
} from "../../testUtils/mocks/mockStore/mockStore";
import customRender from "../../testUtils/wrappers/customRender/customRender";
import App from "./App";

const mockUser = { userName: "Pedro", image: "", token: "token", id: "1" };

jest.mock("../../utils/auth/auth", () => () => mockUser);

describe("When it's instantiated", () => {
  const store = mockStore({
    uiPreloadState: {
      ...initialUiState,
      isModalShowing: true,
      isLoadingShowing: true,
    },
  });

  test("Then should show 'Cargando...' from Loading component", () => {
    const loadingText = "Cargando...";

    customRender(<App />, { store });

    const text = screen.getByText(loadingText);

    expect(text).toBeInTheDocument();
  });

  test("Then should show a button with 'X' from Modal component", () => {
    const textButton = "✕";

    customRender(<App />, { store });

    const button = screen.getByRole("button", { name: textButton });

    expect(button).toBeInTheDocument();
  });

  test("Then should show 'Home' in a heading", () => {
    const homeTitle = "Home";

    customRender(<App />);

    const headingHome = screen.getByRole("heading", { name: homeTitle });

    expect(headingHome).toBeInTheDocument();
  });

  describe("And navigator have a token", () => {
    test("Then dispatch has to been called with loginUser action", () => {
      const loginUserAction = loginUserActionCreator(mockUser);

      const mockToken = "mockToken";
      window.localStorage.setItem("token", mockToken);

      customRender(<App />, { store });

      expect(mockDispatch).toHaveBeenCalledWith(loginUserAction);
    });
  });
});
