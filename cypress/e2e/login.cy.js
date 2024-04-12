beforeEach(() => {
  cy.visit('/')
})
describe('login page', () => {
  it("Should successfully login", () => { 
      cy.login('bropet@mail.ru','123')  
      cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible") 
  })

  it("Should not login with empty login", () => { 
      cy.login(null,"123")
      cy.get('#mail').then((elements) => { 
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
      })
    })    
  
  it("Should not login with empty password", () => { 
      cy.login('bropet@mail.ru',null)
      cy.get('#pass').then((elements) => { 
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
      })
  }) 
}) 


