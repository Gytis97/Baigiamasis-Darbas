/// <reference types="Cypress"/>

describe("Testuojam Website", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/planai");
  });
  it("Testuojam planai mygtuka", () => {
    cy.get("#plansbtn").should("exist");
  });
});
