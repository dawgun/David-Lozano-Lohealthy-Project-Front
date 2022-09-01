import { UIReducer } from "./UISlice";

describe("Given the UISlicer", () => {
  const previousUIPayload = {
    isModalShowing: true,
    message: "",
    type: true,
  };

  describe("When call openModal reducer with previousUIState and a payload", () => {
    test("Then should return a newUI with same value of payload", () => {
      const UIPayload = {
        type: "ui/openModal",
        payload: {
          isModalShowing: true,
          message: "It's all ok",
          type: true,
        },
      };
      const expectedNewUI = {
        isModalShowing: true,
        message: "It's all ok",
        type: true,
      };

      const newUI = UIReducer(previousUIPayload, UIPayload);

      expect(newUI).toStrictEqual(expectedNewUI);
    });
  });
});
