/// <reference types="Cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has 4 navigation points', () => {
    cy.get('nav a').shoud('have.length', 4)
  })

  it('can navigate to create page', () => {
    cy.get('nav a').contains('create').click()
    cy.get('path').should('contain', 'create')
  })

  it('does highlight the selected navigation point', ()=>{
    cy.get('nav a').contains('create').click().should('have.css', 'background-color', 'white')
  })
})
