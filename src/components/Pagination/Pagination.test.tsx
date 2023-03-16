import mockDispatch from "../../testUtils/mocks/mockDispatch/mockDispatch";
import userEvent from "@testing-library/user-event";
import customRender from "../../testUtils/wrappers/customRender/customRender";
import {
  nextPageActionCreator,
  previousPageActionCreator,
} from "../../store/games/gamesSlice";
import { screen } from "@testing-library/react";
import { PaginationAPI } from "../../store/games/model/game";
import Pagination from "./Pagination";
import { initialPagination } from "../../testUtils/mocks/mockStore/mockStore";

describe("Given the Pagination component", () => {
  describe("When it's instantiated", () => {
    const paginationWithPages: PaginationAPI = {
      ...initialPagination,
    };

    const paginationWithoutPages: PaginationAPI = {
      ...initialPagination,
      isNextPage: false,
      isPreviousPage: false,
    };

    describe("And user click on button next page 'ᐳ'", () => {
      test("Then dispatch has to been called with nextPage action", async () => {
        const textButton = "ᐳ";
        const nextPageAction = nextPageActionCreator();

        customRender(<Pagination paginationInfo={paginationWithPages} />);

        const button = screen.getByRole("button", {
          name: textButton,
        });
        await userEvent.click(button);

        expect(mockDispatch).toHaveBeenCalledWith(nextPageAction);
      });
    });

    describe("And user click on button previous page 'ᐸ'", () => {
      test("Then dispatch has to been called with nextPage action", async () => {
        const textButton = "ᐸ";
        const previousPageAction = previousPageActionCreator();

        customRender(<Pagination paginationInfo={paginationWithPages} />);

        const button = screen.getByRole("button", {
          name: textButton,
        });
        await userEvent.click(button);

        expect(mockDispatch).toHaveBeenCalledWith(previousPageAction);
      });
    });

    describe("And user click on button next page when there isn't more pages 'ᐳ'", () => {
      test("Then dispatch has to been not called with nextPage action", async () => {
        const textButton = "ᐳ";
        const nextPageAction = nextPageActionCreator();

        customRender(<Pagination paginationInfo={paginationWithoutPages} />);

        const button = screen.getByRole("button", {
          name: textButton,
        });
        await userEvent.click(button);

        expect(mockDispatch).not.toHaveBeenCalledWith(nextPageAction);
      });
    });

    describe("And user click on button previous page when there isn't more pages 'ᐸ'", () => {
      test("Then dispatch has to been called with nextPage action", async () => {
        const textButton = "ᐸ";
        const previousPageAction = previousPageActionCreator();

        customRender(<Pagination paginationInfo={paginationWithoutPages} />);

        const button = screen.getByRole("button", {
          name: textButton,
        });
        await userEvent.click(button);

        expect(mockDispatch).not.toHaveBeenCalledWith(previousPageAction);
      });
    });
  });
});
