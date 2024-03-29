import useGames from "../../../hooks/useGames/useGames";

const mockUseGames: ReturnType<typeof useGames> = {
  getAllGames: jest.fn(),
  deleteGame: jest.fn(),
  createGame: jest.fn(),
  getGamesByUser: jest.fn(),
  getGameById: jest.fn(),
  searchGames: jest.fn(),
  updateGame: jest.fn(),
};

jest.mock(
  "../../../hooks/useGames/useGames",
  () => (): ReturnType<typeof useGames> => ({
    getAllGames: mockUseGames.getAllGames,
    deleteGame: mockUseGames.deleteGame,
    createGame: mockUseGames.createGame,
    getGamesByUser: mockUseGames.getGamesByUser,
    getGameById: mockUseGames.getGameById,
    searchGames: mockUseGames.searchGames,
    updateGame: mockUseGames.updateGame,
  })
);

export default mockUseGames;
