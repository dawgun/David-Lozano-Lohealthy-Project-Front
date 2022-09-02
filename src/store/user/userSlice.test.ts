import { UserLoginState } from "./model/user";
import { userReducer } from "./userSlice";

describe("Given userSlice", () => {
  describe("When call loginUser reducer with previousUIState and a payload with user", () => {
    test("Then should return the property isLogged true with user data", () => {
      const previousState: UserLoginState = {
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

      const newState = userReducer(previousState, userPayload);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});
