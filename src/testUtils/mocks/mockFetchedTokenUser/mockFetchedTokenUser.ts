const mockFetchedTokenUser = {
  userName: "Pedro",
  image: "",
  token: "token",
  id: "1",
};

jest.mock(
  "../../../utils/fetchToken/fetchToken",
  () => () => mockFetchedTokenUser
);

export default mockFetchedTokenUser;
