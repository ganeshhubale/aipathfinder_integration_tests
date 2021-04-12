describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})


describe('My Second Test', () => {
  it('visit the pathfinder project', () => {

    cy.visit("https://example.cypress.io")
    cy.contains("focus").click()
    cy.url().should('include', '/commands/actions')
  })
})