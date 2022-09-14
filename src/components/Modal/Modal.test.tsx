import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Modal from "./Modal";
import userEvent from "@testing-library/user-event";

let mockSelectorReturn = {
  isModalShowing: false,
  message: "This test is awesome",
  type: true,
};

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useSelector: () => mockSelectorReturn,
}));

describe("Given a Modal component", () => {
  describe("When instantiated", () => {
    const expectedText = "This test is awesome";
    test("Then it should show 'This test is awesome'", async () => {
      render(
        <Provider store={store}>
          <Modal />
        </Provider>
      );

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });

    test("Then it should show a green background color", async () => {
      render(
        <Provider store={store}>
          <Modal />
        </Provider>
      );

      const modal = screen.getByText(expectedText);
      const modalStyle = getComputedStyle(modal);

      expect(modalStyle.borderColor).toBe("rgb(74,172,14)");
    });

    test("Then it should show a red background color", async () => {
      mockSelectorReturn = {
        isModalShowing: false,
        message: "This test is awesome",
        type: false,
      };

      render(
        <Provider store={store}>
          <Modal />
        </Provider>
      );

      const modal = screen.getByText(expectedText);
      const modalStyle = getComputedStyle(modal);

      expect(modalStyle.borderColor).toBe("rgb(212,53,33)");
    });

    test("Then it should show the message it have received", async () => {
      render(
        <Provider store={store}>
          <Modal />
        </Provider>
      );

      const button = screen.getByRole("button", { name: "✕" });
      await userEvent.click(button);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
