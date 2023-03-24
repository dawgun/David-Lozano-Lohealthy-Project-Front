import fetchToken from "../../../utils/fetchToken/fetchToken";

const mockFetchedTokenUser: ReturnType<typeof fetchToken> = {
  userName: "Pedro",
  image: "",
  token: "token",
  id: "1",
};

jest.mock(
  "../../../utils/fetchToken/fetchToken",
  () => (): ReturnType<typeof fetchToken> => mockFetchedTokenUser
);

export default mockFetchedTokenUser;
