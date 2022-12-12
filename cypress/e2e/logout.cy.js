describe("Logout", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
  });

  it("will log out", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#user-dropdown-button:visible").click();
    cy.wait(500);
    cy.get("#login-modal-label:visible").click();
    cy.wait(1500);
    cy.get("input[type='email']:visible").should("exist").type("testeroni@noroff.no");
    cy.get("input[type='password']:visible").should("exist").type("123456789");
    cy.get("button[type='submit']:visible").click();
    cy.wait(3000);
    cy.then(() => expect(window.localStorage.getItem("user")).to.not.be.null);
    cy.then(() => expect(window.localStorage.getItem("jwt")).to.not.be.null);
    cy.get("#user-dropdown-button:visible").click();
    cy.wait(500);
    cy.get("#logout-button").click();
    cy.then(() => expect(window.localStorage.getItem("user")).to.be.null);
    cy.then(() => expect(window.localStorage.getItem("jwt")).to.be.null);
  });
});
