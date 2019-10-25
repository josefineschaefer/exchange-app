/// <reference types="Cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has 4 navigation points', () => {
    cy.get('nav a').should('have.length', 4)
  })
})
