// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

describe('Receipt', () => {
  it('shows the price on the receipt', () => {
    cy.visit('app/index.html')
    cy.get('#grand-total')
      .invoke('text')
      .should('be.a', 'string')
      .then((totalText) => {
        cy.contains('button', 'View Summary').click()
        cy.get('#dialog-total-value').should('have.text', totalText)
      })
  })
})
