import Navbar from './elements/navbar'
import Example1Page from './example1'

class Homepage {
  constructor() {
    this.navbar = new Navbar()
  }
  
  visit() {
    cy.visit('/')
  }

  getIntroText() {
    const introText = cy.get('#intro')
    return introText
  }
  
  goToExample1() {
    const link = this.navbar.getExample1Link()
    link.click()

    const example1 = new Example1Page()
    return example1
  }
}

export default Homepage