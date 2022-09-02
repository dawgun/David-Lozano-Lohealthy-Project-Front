import emailValidator from "./emailValidator";

describe("Given the emailValidator function", () => {
  describe("When it's called with 'patatasfritas'", () => {
    test("Then it should return false", () => {
      const text = "patatasfritas";
      const expectedReturn = false;

      const isEmailValidate = emailValidator(text);

      expect(isEmailValidate).toBe(expectedReturn);
    });
  });

  describe("When it's called with 'dawgun@hotmail.com'", () => {
    test("Then it should return true", () => {
      const text = "dawgun@hotmail.com";
      const expectedReturn = true;

      const isEmailValidate = emailValidator(text);

      expect(isEmailValidate).toBe(expectedReturn);
    });
  });
});
