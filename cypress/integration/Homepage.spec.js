/// <reference types="Cypress" />

context('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has the right App title', () => {
    cy.title().should('contain', 'Exchange App')
  })

  it('has a header saying mein Austauschjahr', ()=>{
    cy.get('header').should('have.text', 'Mein Austauschjahr')
  })

  it('has some entries', ()=>{
    cy.get('h2').should('have.length.gt', 3).parent('section').find('p').should('have.length.gt', 10 )
  })

it('has a navigation', ()=> {
  cy.get('nav').should('have.length', 1)
})




})

