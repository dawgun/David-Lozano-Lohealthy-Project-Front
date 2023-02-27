import { screen } from "@testing-library/react";
import Modal from "./Modal";
import userEvent from "@testing-library/user-event";
import customRender from "../../testUtils/wrappers/customRender/customRender";
import {
  initialUiState,
  mockStore,
} from "../../testUtils/mocks/mockStore/mockStore";
import { closeModalActionCreator } from "../../store/UI/UISlice";

describe("Given a Modal component", () => {
  let uiState = {
    isModalShowing: false,
    message: "This test is awesome",
    type: true,
  };

  describe("When it's instantiated", () => {
    const expectedText = "This test is awesome";
    const customStore = mockStore({
      uiPreloadState: { ...initialUiState, ...uiState },
    });

    test("Then it should show 'This test is awesome'", async () => {
      customRender(<Modal />, { store: customStore });

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });

    describe("And type of message is true", () => {
      test("Then it should show a green background color", async () => {
        customRender(<Modal />, { store: customStore });

        const modal = screen.getByText(expectedText);
        const modalStyle = getComputedStyle(modal);

        expect(modalStyle.borderColor).toBe("rgb(74,172,14)");
      });
    });

    describe("And type of message is false", () => {
      test("Then it should show a red background color", async () => {
        const customStore = mockStore({
          uiPreloadState: { ...initialUiState, ...uiState, type: false },
        });

        customRender(<Modal />, { store: customStore });

        const modal = screen.getByText(expectedText);
        const modalStyle = getComputedStyle(modal);

        expect(modalStyle.borderColor).toBe("rgb(212,53,33)");
      });
    });

    describe("And user click on '✕' button", () => {
      test("Then dispatch must to be called with close modal action", async () => {
        const mockDispatch = jest.fn();
        const closeModalAction = closeModalActionCreator();

        customRender(<Modal />, { store: customStore, dispatch: mockDispatch });

        const button = screen.getByRole("button", { name: "✕" });
        await userEvent.click(button);

        expect(mockDispatch).toHaveBeenCalledWith(closeModalAction);
      });
    });
  });
});
