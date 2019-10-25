/// <reference types="Cypress" />

context('Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has the right App title', () => {
    cy.title().should('contain', 'Exchange App')
  })

  it('has a header saying mein Austauschjahr', () => {
    cy.get('header').should('have.text','Mein Austauschjahr')
  })

  it('has a navigation', () => {
  cy.get('nav').should('have.length', 1)
  })
})

