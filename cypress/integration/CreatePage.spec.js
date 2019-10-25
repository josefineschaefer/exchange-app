/// <reference types="Cypress" />

context('CreatePage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/create')
  })
})