import Navbar from '/elements/navbar'

class Homepage {
  constructor() {
    this.navbar = new Navbar()
  }
  
  visit() {
    cy.visit('/')
  }
  
  getUserAvatar() {
    return cy.get(`[data-testid=UserAvatar]`)
  }
  
  goToExample1() {
    const link = this.navbar.example1link
    link.click()

    const example1 = new Example1Page()
    return signIn
  }
}

export default Homepage