// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

describe('Receipt', () => {
  it('can be printed', () => {
    cy.visit('app/index.html')
    cy.window().then((win) => {
      cy.stub(win, 'print').as('print')
    })
    cy.contains('button', 'Print Receipt').click()
    cy.get('@print').should('have.been.calledOnce')
  })
})
