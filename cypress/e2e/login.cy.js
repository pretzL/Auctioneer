describe("Authentication", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
  });

  it("will login", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#user-dropdown-button:visible").click();
    cy.wait(500);
    cy.get("#login-modal-label:visible").click();
    cy.wait(1500);
    cy.get("input[type='email']:visible").should("exist").type("testeroni@stud.noroff.no");
    cy.get("input[type='password']:visible").should("exist").type("123456789");
    cy.get("button[type='submit']:visible").click();
    cy.wait(3000);
    cy.then(() => expect(window.localStorage.getItem("user")).to.not.be.null);
    cy.then(() => expect(window.localStorage.getItem("jwt")).to.not.be.null);
    cy.url().should("include", "profile");
  });

  it("Validates email input", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#user-dropdown-button:visible").click();
    cy.wait(500);
    cy.get("#login-modal-label:visible").click();
    cy.wait(1500);
    cy.get("input[type='email']:visible").should("exist").type("fake@email.com");
    cy.get("input[type='password']:visible").should("exist").type("123456789");
    cy.get("button[type='submit']:visible").click();
    cy.wait(3000);
    cy.then(() => expect(window.localStorage.getItem("user")).to.be.null);
    cy.then(() => expect(window.localStorage.getItem("jwt")).to.be.null);
    cy.url().should("not.include", "profile");
  });

  it("Validates password", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#user-dropdown-button:visible").click();
    cy.wait(500);
    cy.get("#login-modal-label:visible").click();
    cy.wait(1500);
    cy.get("input[type='email']:visible").should("exist").type("testeroni@stud.noroff.no");
    cy.get("input[type='password']:visible").should("exist").type("1234");
    cy.get("button[type='submit']:visible").click();
    cy.wait(3000);
    cy.then(() => expect(window.localStorage.getItem("user")).to.be.null);
    cy.then(() => expect(window.localStorage.getItem("jwt")).to.be.null);
    cy.url().should("not.include", "profile");
  });
});
