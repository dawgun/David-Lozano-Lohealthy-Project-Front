import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event/";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { toggleMenuActionCreator } from "../../store/UI/UISlice";
import Header from "./Header";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given the Header component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show Lohealthy Games in heading", () => {
      render(
        <Provider store={store}>
          <Header />
        </Provider>
      );
      const title = screen.getByRole("heading", { name: "Lohealthy Games" });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show a button", () => {
      render(
        <Provider store={store}>
          <Header />
        </Provider>
      );
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });

    describe("And users click on button", () => {
      test("Then it should be called the function", async () => {
        render(
          <Provider store={store}>
            <Header />
          </Provider>
        );
        const button = screen.getByRole("button");
        await userEvent.click(button);

        expect(mockDispatch).toHaveBeenCalledWith(toggleMenuActionCreator());
      });
    });
  });
});
