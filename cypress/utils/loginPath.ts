const loginPath = (username: string, password: string) => {
  const homeTitle = "Home";
  const buttonMenuAltText = "Menu icon";
  const loginText = "Login";
  const userInput = "Usuario";
  const passwordInput = "Contraseña";

  cy.visit("/");
  cy.findByRole("heading", { name: homeTitle }).should("exist");
  cy.findByRole("button", { name: buttonMenuAltText }).should("exist").click();
  cy.findByRole("link", { name: loginText }).should("exist").click();
  cy.findByRole("heading", { name: loginText }).should("exist");
  cy.findByPlaceholderText(userInput).should("exist").type(username);
  cy.findByPlaceholderText(passwordInput).should("exist").type(password);
  cy.findByRole("button", { name: loginText }).click();
};

export default loginPath;
