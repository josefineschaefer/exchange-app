/// <reference types="Cypress" />

context('Gallery', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/gallery')
  })

  it('has filters', () => {
    cy.get('button').contains('Alle Bilder').next('button').contains('Gastfamilie').next('button').should('have.text', 'Schule').next('button').should('have.text', 'Ausflug')
  })
})
