import { setActivePinia, createPinia } from 'pinia'
import { useProduct } from '@/stores/product.js'

describe('Product', () => {
  beforeEach(() => { // This creates a fresh pinia and makes it active so it's automatically picked up by any useStore() call without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('initially not loading', () => {
    const product = useProduct()
    
    expect(product.loading).to.be.false
  })

  it('able to start the loader', () => {
    const product = useProduct()

    expect(product.loading).to.be.false
    
    product.loadProductList()

    expect(product.loading).to.be.true
  })

  it('able to stop the loader', () => {
    const product = useProduct()

    expect(product.loading).to.be.false
    
    product.loadProductList()

    expect(product.loading).to.be.true

    product.unloadProductList()

    expect(product.loading).to.be.false
  })
})