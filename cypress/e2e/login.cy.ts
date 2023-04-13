/* eslint-disable cypress/no-force */
import loginPath from "../utils/loginPath";

describe("Given Lohealthy Games app", () => {
  describe("When user login in app and go to my games section'", () => {
    it("Then should show 'Mis Juegos' in a heading", () => {
      const usernamePasswordLogin = "admin";
      const homeTitle = "Home";
      const myGamesText = "Mis Juegos";

      loginPath(usernamePasswordLogin, usernamePasswordLogin);
      cy.findByRole("heading", { name: homeTitle }).should("exist");
      cy.findByRole("link", { name: myGamesText }).click({ force: true });
      cy.findByRole("heading", { name: myGamesText }).should("exist");
    });
  });
});
