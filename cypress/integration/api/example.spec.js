/// <reference types="Cypress"/>

describe('Group of test', function () {
  it('api test', function () {
    // see full command at: cypress/support/keywords/api.js
    cy.getTodos()
  })
})
