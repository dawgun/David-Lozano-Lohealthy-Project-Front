describe("Given Lohealthy Games app", () => {
  describe("When user login in app and go to my games section'", () => {
    it("Then should show 'Mis Juegos' in a heading", () => {
      const homeTitle = "Home";
      const buttonMenuAltText = "Menu icon";
      const loginText = "Login";
      const myGamesText = "Mis Juegos";
      const userInput = "Usuario";
      const passwordInput = "Contraseña";

      cy.visit("/");
      cy.findByRole("heading", { name: homeTitle }).should("exist");
      cy.findByRole("button", { name: buttonMenuAltText })
        .should("exist")
        .click();
      cy.findByRole("link", { name: loginText }).should("exist").click();
      cy.findByRole("heading", { name: loginText }).should("exist");
      cy.findByPlaceholderText(userInput).should("exist").type("admin");
      cy.findByPlaceholderText(passwordInput).should("exist").type("admin");
      cy.findByRole("button", { name: loginText }).click();
      cy.findByRole("heading", { name: homeTitle }).should("exist");
      cy.findByRole("link", { name: myGamesText }).click();
      cy.findByRole("heading", { name: myGamesText }).should("exist");
    });
  });
});
