import { setActivePinia, createPinia } from 'pinia'
import { useShoppingCart } from '@/stores/shopping-cart.js'

describe('Shopping Cart', () => {
  beforeEach(() => { // This creates a fresh pinia and makes it active so it's automatically picked up by any useStore() call without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('initially empty array', () => {
    const shopping_cart = useShoppingCart()

    expect(shopping_cart.cart).to.be.empty
  })

  it('able to add in cart', () => {
    const shopping_cart = useShoppingCart()

    shopping_cart.addToCart({
      id: '1',
      title: 'Sample Title',
      description: 'Sample Description'
    })

    expect(localStorage.getItem('shopping-cart')).to.exist
    expect(shopping_cart.cart).to.have.lengthOf(1)
  })

  it('able to delete in cart', () => {
    const shopping_cart = useShoppingCart()
    shopping_cart.removeToCart(1)
    
    expect(shopping_cart.cart).to.be.empty
  })
})