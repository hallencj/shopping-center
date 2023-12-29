import { setActivePinia, createPinia } from 'pinia'
import { useAlertMessageStore, useUserStore, useShoppingCart } from '../index.js'

// This creates a fresh pinia and makes it active so it's automatically picked up by any useStore() call without having to pass it to it: `useStore(pinia)`
const createFreshPinia = () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
}

describe('Alert Message', () => {
  createFreshPinia()

  it('initially closed', () => {
    const alert_message = useAlertMessageStore()
    expect(alert_message.alert.show).to.be.false
  })

  it('shows alert', () => {
    const alert_message = useAlertMessageStore()

    alert_message.showAlert({
      width: '500px',
      status: 'warning',
      title: 'Sample Title',
      body: 'Sample Body'
    })
    expect(alert_message.alert).to.have.keys('show', 'width', 'status', 'title', 'body')
    expect(alert_message.alert.show).to.be.true
  })

  it('shows not available', () => {
    const alert_message = useAlertMessageStore()
    alert_message.showNotAvailable()
    expect(alert_message.alert).to.have.keys('show', 'width', 'status', 'title')
    expect(alert_message.alert.show).to.be.true
  })

  it('handle action', () => {
    const alert_message = useAlertMessageStore()
    alert_message.handleAction()
    expect(alert_message.alert.show).to.be.false
  })
})

describe('User', () => {
  createFreshPinia()

  it('initially logged-out', () => {
    const user = useUserStore()
    expect(user.credentials.logged_in).to.be.false
    expect(localStorage.getItem('user-credentials')).not.to.exist
  })
  
  it('toggleable logged-in', () => {
    const user = useUserStore()
    expect(user.credentials.logged_in).to.be.false
    expect(localStorage.getItem('user-credentials')).not.to.exist
    
    user.toggleLoggedIn()
    expect(user.credentials.logged_in).to.be.true
    expect(localStorage.getItem('user-credentials')).to.exist
  })

  it('verified credentials', () => {
    const user = useUserStore()
    user.toggleLoggedIn()
    
    expect(JSON.parse(localStorage.getItem('user-credentials'))).to.have.all.keys('logged_in', 'first_name', 'last_name', 'username_email', 'address', 'contact_number', 'preferred_mode_of_payment')
  })
})

describe('Shopping Cart', () => {
  createFreshPinia()

  it('initially empty array', () => {
    const shopping_cart = useShoppingCart()
    expect(shopping_cart.carts).to.be.empty
  })

  it('able to add in cart', () => {
    const shopping_cart = useShoppingCart()

    shopping_cart.addToCart({
      id: '1',
      title: 'Sample Title',
      description: 'Sample Description'
    })

    expect(localStorage.getItem('shopping-cart')).to.exist
    expect(shopping_cart.carts).to.have.lengthOf(1)
  })

  it('able to delete in cart', () => {
    const shopping_cart = useShoppingCart()
    shopping_cart.removeToCart(1)
    
    expect(shopping_cart.carts).to.be.empty
  })
})