/* eslint-disable cypress/no-force */
import loginPath from "../utils/loginPath";

describe("Given Lohealthy Games app", () => {
  describe("When user login in app and go to my games section'", () => {
    it("Then should show 'Mis Juegos' in a heading", () => {
      const usernamePasswordLogin = "admin";
      const homeTitle = "Home";
      const myGamesText = "Mis Juegos";
      const createButton = "Crear Juego";

      loginPath(usernamePasswordLogin, usernamePasswordLogin);
      cy.findByRole("heading", { name: homeTitle }).should("exist");
      cy.findByRole("link", { name: myGamesText }).click();
      cy.findByRole("heading", { name: myGamesText }).should("exist");
      cy.findByRole("button", { name: createButton }).should("exist").click();
      cy.findByPlaceholderText("Título")
        .should("exist")
        .type("Monkey Island", { force: true });
      cy.findByPlaceholderText("Género").should("exist").select(1);
      cy.findByPlaceholderText("Jugadores").should("exist").select(1);
      cy.findByPlaceholderText("Fecha")
        .should("exist")
        .type("2022-09-09", { force: true });
      cy.findByPlaceholderText("Descripción del juego")
        .should("exist")
        .type(
          "Erase una vez un juego que molaba mucho y todos querian jugar porque era el mejor"
        );
      cy.findByPlaceholderText("Imagen")
        .should("exist")
        .selectFile("cypress/e2e/images/gameCover.jpg");
      cy.findByRole("button", { name: "Crear" }).should("exist").click();
      cy.contains("Juego creado satisfactoriamente")
        .findByRole("button", { name: "✕" })
        .click();
      cy.findByRole("button", { name: "✗" }).should("exist").click();
      cy.contains("Juego borrado satisfactoriamente")
        .findByRole("button", { name: "✕" })
        .click();
    });
  });
});
