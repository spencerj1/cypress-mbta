import Navbar from './elements/navbar'

class Example1Page {
  constructor() {
    this.navbar = new Navbar()
  }
  
  visit() {
    cy.visit('/example1')
  }

  getHeaderText() {
    const pageHeader = cy.get('h2')
    return pageHeader
  }
  
  getRoutesList() {
    const getRoutesButton = cy.get('#getRoutesBtn')
    getRoutesButton.click()
  }

  getRouteInList(routeId) {
    const routeItem = cy.get(`#${routeId}`)
    return routeItem
  }
}

export default Example1Page