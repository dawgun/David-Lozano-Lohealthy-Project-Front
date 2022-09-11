import { UIState } from "./model/UI";
import { UIReducer } from "./UISlice";

describe("Given the UISlicer", () => {
  const previousUIPayload: UIState = {
    isLoadingShowing: false,
    isModalShowing: true,
    message: "",
    type: true,
  };

  describe("When call openModal reducer with previousUIState and a payload", () => {
    test("Then should return a newUI with same value of payload", () => {
      const UIPayload = {
        type: "ui/openModal",
        payload: {
          message: "It's all ok",
          type: true,
        },
      };
      const expectedNewUI = {
        isLoadingShowing: false,
        isModalShowing: true,
        message: "It's all ok",
        type: true,
      };

      const newUI = UIReducer(previousUIPayload, UIPayload);

      expect(newUI).toStrictEqual(expectedNewUI);
    });
  });

  describe("When call closeModal reducer with previousUIState and a payload", () => {
    test("Then should return same previosUIState with isModalShowing property to false", () => {
      const UIPayload = {
        type: "ui/closeModal",
      };
      const expectedNewUI = {
        isLoadingShowing: false,
        isModalShowing: false,
        message: "",
        type: true,
      };

      const newUI = UIReducer(previousUIPayload, UIPayload);

      expect(newUI).toStrictEqual(expectedNewUI);
    });
  });

  describe("When call showLoader reducer with previousUIState", () => {
    test("Then should return same previosUIState with isLoadingShowing property to true", () => {
      const UIPayload = {
        type: "ui/showLoader",
      };
      const expectedNewUI = {
        isLoadingShowing: true,
        isModalShowing: true,
        message: "",
        type: true,
      };

      const newUI = UIReducer(previousUIPayload, UIPayload);

      expect(newUI).toStrictEqual(expectedNewUI);
    });
  });

  describe("When call closeLoader reducer with previousUIState", () => {
    test("Then should return same previosUIState with isLoadingShowing property to false", () => {
      const UIPayload = {
        type: "ui/closeLoader",
      };
      const expectedNewUI = {
        isLoadingShowing: false,
        isModalShowing: true,
        message: "",
        type: true,
      };

      const newUI = UIReducer(previousUIPayload, UIPayload);

      expect(newUI).toStrictEqual(expectedNewUI);
    });
  });
});
