/// <reference types="Cypress" />

context('Gallery', () => {
  beforeEach(() => {
    cy.visit('/gallery')
  })

  it('has filters', () => {
    cy.get('button').contains('Alle Bilder').next('button').contains('Gastfamilie').next('button').should('have.text', 'Schule').next('button').should('have.text', 'Ausflug')
  })
})
