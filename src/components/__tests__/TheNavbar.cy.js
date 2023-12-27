import TheNavbar from '../TheNavbar.vue'

describe('TheNavbar', () => {
  it('playground', () => {
    cy.mount(TheNavbar, { props: { msg: 'Hello Cypress' } })
  })

  it('renders properly', () => {
    cy.mount(TheNavbar, { props: { msg: 'Hello Cypress' } })
    cy.get('header').should('be.visible')
  })
})
