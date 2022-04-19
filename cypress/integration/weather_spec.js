describe('The NOAA Site', () => {
  it('Loads the homepage', () => {
    cy.visit('https://www.weather.gov')
    cy.contains('CURRENT CONDITIONS')
  })
})