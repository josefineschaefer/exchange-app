/// <reference types="Cypress" />

context('CreatePage', () => {
  beforeEach(() => {
    cy.visit('/create')
  })

  it('has two input elements and one button', () => {
    cy.get('input').shoud('have.length', 2)
    cy.get('button').should('have.length', 1).contains('erstellen')
  })

})



