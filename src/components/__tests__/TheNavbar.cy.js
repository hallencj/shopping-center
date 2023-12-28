import App from './../../App.vue'
import TheNavbar from './../TheNavbar.vue'

describe('<TheNavbar />', () => {
  it('renders properly', () => {
    cy.mount(App)
    cy.mount(TheNavbar)
  })
  
  it('content exists', () => {
    cy.mount(App)
    cy.mount(TheNavbar)
    cy.get('v-app-bar').should('be.visible')
    cy.get('v-app-bar-title').should('be.visible')
    cy.get('span').should('contain', 'Shopping Center')
  })
})