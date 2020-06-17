import Homepage from '../../pages/homepage';

describe('Example1 Tests', () => {
  //Initialize homepage
  const home = new Homepage();

  it('should display Intro text on Homepage', () => {
    //nav to homepage
    home.visit();

    // assert introduction text appears on homepage with contents
    home.getIntroText()
        .should('exist')
        .contains('The purpose of this project is to provide a few examples')

  });

  it('should retreive Route List when button is clicked', () => {

    // Nav to example 1 using navbar
    const example1 = home.goToExample1();

    // Assert intro text is present on Example 1 page
    example1.getHeaderText()
        .should('exist')
        .contains('Example 1:')

    // Click button to retreive route list
    example1.getRoutesList()

    // Assert route is displayed in route list on page
    example1.getRouteInList('Green-D')
        .should('exist')
        .contains('Destinations - Riverside,Government Center')
  });
});