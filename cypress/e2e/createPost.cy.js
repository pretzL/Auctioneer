describe("Create Post", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(1000);
    cy.get("#user-dropdown-button:visible").click();
    cy.wait(500);
    cy.get("#login-modal-label:visible").click();
    cy.wait(1000);
    cy.get("input[type='email']:visible").should("exist").type("testeroni@stud.noroff.no");
    cy.get("input[type='password']:visible").should("exist").type("123456789");
    cy.get("button[type='submit']:visible").click();
    cy.wait(3500);
    cy.visit("/");
  });

  it("Can create a post", () => {
    cy.wait(1000);
    cy.get("#create-listing-label").click();
    cy.wait(2000);
    cy.get("input[name=title]").should("exist").type("Creating a post in Cypress");
    cy.get("input[name=tags]").should("exist").type("Testing, Cypress, KillMePls");
    cy.get("input[name=media]")
      .should("exist")
      .type("https://cdn.discordapp.com/attachments/729294434491170856/1027146979110817802/brooke-lark-M4E7X3z80PQ-unsplash_700px-test.jpg");
    cy.get("textarea[name=desc]").should("exist").type("I made this using Cypress so if anything went wrong, don't kill me");
    cy.get("input[name=date]").should("exist").type("2024-01-01T00:00:00");
    cy.get("button[type='submit']:visible").click();
    cy.wait(5000);
    cy.url().should("include", "listing.html?id");
    cy.wait(1000);
    cy.get("#delete-button:visible").click();
    cy.wait(1000);
    cy.get("#delete-listing-button:visible").click();
    cy.wait(3000);
    cy.url().should("include", "/");
  });

  it("Throws error if auth key is missing", () => {
    cy.wait(1000);
    cy.get("#create-listing-label").click();
    cy.wait(2000);
    cy.clearLocalStorage();
    cy.get("input[name=title]").should("exist").type("Creating a post in Cypress");
    cy.get("input[name=date]").should("exist").type("2024-01-01T00:00:00");
    cy.get("button[type='submit']:visible").click();
    cy.wait(2000);
    cy.get(".alert").contains("Error");
    cy.url().should("include", "/");
  });

  it("Cannot resolve an empty request", () => {
    cy.wait(1000);
    cy.get("#create-listing-label").click();
    cy.wait(2000);
    cy.get("button[type='submit']:visible").click();
    cy.get("input[name=title]:invalid").invoke("prop", "validationMessage").should("include", "Please fill out this field");
  });

  it("Requires a post title", () => {
    cy.wait(500);
    cy.get("#create-listing-label").click();
    cy.wait(2000);
    cy.get("input[name=tags]").should("exist").type("Testing, Cypress, KillMePls");
    cy.get("input[name=media]")
      .should("exist")
      .type("https://cdn.discordapp.com/attachments/729294434491170856/1027146979110817802/brooke-lark-M4E7X3z80PQ-unsplash_700px-test.jpg");
    cy.get("textarea[name=desc]").should("exist").type("I made this using Cypress so if anything went wrong, don't kill me");
    cy.get("input[name=date]").should("exist").type("2024-01-01T00:00:00");
    cy.get("button[type='submit']:visible").click();
    cy.get("input[name=title]:invalid").invoke("prop", "validationMessage").should("include", "Please fill out this field");
  });
});
