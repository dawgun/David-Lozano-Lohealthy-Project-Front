const mockUseGames = {
  getAllGames: jest.fn(),
  deleteGame: jest.fn(),
  createGame: jest.fn(),
  getGamesByUser: jest.fn(),
  getGameById: jest.fn(),
};

jest.mock("../../../../hooks/useGames/useGames", () => () => ({
  getAllGames: mockUseGames.getAllGames,
  deleteGame: mockUseGames.deleteGame,
  createGame: mockUseGames.createGame,
  getGamesByUser: mockUseGames.getGamesByUser,
  getGameById: mockUseGames.getGameById,
}));

export default mockUseGames;
