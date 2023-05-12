describe("template spec", () => {
  it("passes", () => {
    cy.viewport(1440, 1280);
    cy.visit("/");
    cy.get("input").clear().type("Venezuela")
  });
});
