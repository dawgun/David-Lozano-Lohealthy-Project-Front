import fetchToken from "./auth";
import jwt from "jwt-decode";

jest.mock("jwt-decode", () => jest.fn());

describe("Given the auth module", () => {
  describe("When call fetchToken function with a Nachus token", () => {
    test("Then should return username 'Nachus', an image, an id and token", () => {
      const token = "NachusToken";
      (jwt as jest.Mock).mockImplementationOnce(() => ({ token }));

      fetchToken(token);

      expect(jwt).toHaveBeenCalledWith(token);
    });
  });
});
