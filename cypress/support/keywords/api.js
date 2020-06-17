Cypress.Commands.add('getTodos', () => {
  cy.api({
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    method: 'GET',
    // If method equal POST, PUT
    // method: 'POST',
    // body: {
    //   email: email,
    //   password: password,
    // },
    // If code response not equal 200
    failOnStatusCode: false,
  })
})
