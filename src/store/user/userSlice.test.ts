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
          token: "",
          id: "",
        },
      };
      const userPayload = {
        type: "user/loginUser",
        payload: {
          userName: "Pablo",
          image: "pablo.jpg",
          token: "g7s8ag8a",
          id: "f87dfs89fs",
        },
      };
      const expectedNewState: UserLoginState = {
        isLogged: true,
        user: {
          userName: "Pablo",
          image: "pablo.jpg",
          token: "g7s8ag8a",
          id: "f87dfs89fs",
        },
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
          token: "87f8fa8asf0s",
          id: "a9ga8g0a8",
        },
      };
      const userPayload = {
        type: "user/logoutUser",
      };
      const expectedNewState: UserLoginState = {
        isLogged: false,
        user: { userName: "", image: "", token: "", id: "" },
      };

      const newState = userReducer(previousUserState, userPayload);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});
