/// <reference types="Cypress"/>

describe("Testuojam Website", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("TESTAI", () => {
    cy.get("#button").should("exist");
    cy.get("#3").should("exist");
    cy.get("h5").should(($h5) => {
      expect($h5.get(0).innerText).to.eq("Diana");
    });
    cy.get("#btn").click();
    cy.get("h5").should(($h5) => {
      expect($h5.get(0).innerText).to.eq("Danielius");
    });
    cy.get("#btn").click();
    cy.get("h5").should(($h5) => {
      expect($h5.get(0).innerText).to.eq("Tomas");
    });
    cy.get("#btn").click();
    cy.get("h5").should(($h5) => {
      expect($h5.get(0).innerText).to.eq("Rūta");
    });
    cy.get("#btn").click();
    cy.get("h5").should(($h5) => {
      expect($h5.get(0).innerText).to.eq("Gabrielė");
    });
    cy.get("#plansbtn").should("exist");
  });
});
