beforeEach(() => {
  cy.visit('/')
  cy.login ('bropet@mail.ru','123');
})
it("Should successfully add book", () => {
  cy.createNewBook("Grok algorithms", "Техническая литература", "Aditya Bhargava ");
  cy.contains("Grok algorithms").should("be.visible");
});

it("Should successfully add book to favorite", () => {
  cy.addBookToFavorite("Black Hat Python", "Программирование для хакеров и пентестеров", "Justin Seitz, Tim Arnold");
  cy.contains("Black Hat Python").should("be.visible");
});

it("Should successfully deleted book from favorite", () => {
  cy.deleteBookFromFavorite("Black Hat Python", "Программирование для хакеров и пентестеров", "Justin Seitz, Tim Arnold");
  cy.contains('Delete from favorite').should('be.visible');
});
  