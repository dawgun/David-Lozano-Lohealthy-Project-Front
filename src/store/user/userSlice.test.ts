import { UserLoginState } from "./model/user";
import { userReducer } from "./userSlice";

describe("Given userSlice", () => {
  describe("When call loginUser reducer with previousUserState and action loginUser with an user", () => {
    test("Then should return the property isLogged true with user data", () => {
      const previousUserState: UserLoginState = {
        isLogged: false,
        user: {
          userName: "",
          image: "",
        },
      };
      const userPayload = {
        type: "user/loginUser",
        payload: { userName: "Pablo", image: "" },
      };
      const expectedNewState: UserLoginState = {
        isLogged: true,
        user: { userName: "Pablo", image: "" },
      };

      const newState = userReducer(previousUserState, userPayload);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });

  describe("When call logoutUser reducer with previousUserState and action logoutUser", () => {
    test("Then should return the initial state", () => {
      const previousUserState: UserLoginState = {
        isLogged: true,
        user: {
          userName: "Marius",
          image: "marius.jpg",
        },
      };
      const userPayload = {
        type: "user/logoutUser",
      };
      const expectedNewState: UserLoginState = {
        isLogged: false,
        user: { userName: "", image: "" },
      };

      const newState = userReducer(previousUserState, userPayload);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});
