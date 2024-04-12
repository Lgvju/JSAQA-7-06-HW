Cypress.Commands.add('login', (email, password) => {
    cy.contains('Log in').click()

    if (email) {
        cy.get('#mail').type(email)
    }

    if (password) {
        cy.get('#pass').type(password)
    }

    cy.contains('Submit').click()
})
Cypress.Commands.add("createNewBook", (title, description, author) => {
    cy.contains("Add new").click();
    cy.get("#title").type( title);
    cy.get("#description").type( description);
    cy.get("#authors").type( author);
    cy.contains("Submit").click();
  });

Cypress.Commands.add("addBookToFavorite", (title, description, author) => {
    cy.contains("Add new").click();
    cy.get("#title").type(title);
    cy.get("#description").type(description);
    cy.get("#authors").type(author);
    cy.get("#favorite").click();
    cy.contains("Submit").click();
    cy.wait(1000);
    cy.contains('Add to favorite').click();
  });
