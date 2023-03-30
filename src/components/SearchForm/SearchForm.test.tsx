import mockUseGames from "../../testUtils/mocks/mockUseGames/mockUseGames";
import { screen, waitFor } from "@testing-library/react";
import customRender from "../../testUtils/wrappers/customRender/customRender";
import userEvent from "@testing-library/user-event";
import SearchForm from "./SearchForm";

jest.useFakeTimers();

describe("Given the SearchForm component", () => {
  const placeholderText = "Search";
  const gameSearched = "Kirby";
  const customUserevent = userEvent.setup({
    advanceTimers: () => jest.runOnlyPendingTimers(),
  });

  describe("When it's instantiated", () => {
    test("Then should show 'Search' in a input", () => {
      customRender(<SearchForm />);

      const searchInput = screen.getByPlaceholderText(placeholderText);

      expect(searchInput).toBeInTheDocument();
    });

    describe("And type 'K' and the delete word in search input and pass '1000 ms'", () => {
      test("Then should call function getAllGames with '0'", async () => {
        customRender(<SearchForm />);

        const searchInput: HTMLInputElement =
          screen.getByPlaceholderText(placeholderText);

        await customUserevent.type(searchInput, gameSearched);
        await customUserevent.clear(searchInput);

        await waitFor(() =>
          expect(mockUseGames.getAllGames).toHaveBeenCalledWith(0)
        );
      });
    });

    describe("And type 'Kirby' in search input and pass '1000 ms'", () => {
      test("Then should call function getAllGames", async () => {
        customRender(<SearchForm />);

        const searchInput: HTMLInputElement =
          screen.getByPlaceholderText(placeholderText);

        await customUserevent.type(searchInput, gameSearched);

        await waitFor(() =>
          expect(mockUseGames.searchGames).toHaveBeenCalledWith(gameSearched)
        );
      });
    });
  });
});
