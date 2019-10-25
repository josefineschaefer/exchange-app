/// <reference types="Cypress" />

context('CreatePage', () => {
  beforeEach(() => {
    cy.visit('/create')
  })

  it('has two input elements and one button', () => {
    cy.get('input').should('have.length', 6)
    cy.get('button').should('have.length', 1).contains('erstellen')
  })

})



