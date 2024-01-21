import { setActivePinia, createPinia } from 'pinia'
import { useSnackbar } from '@/stores/snackbar.js'

describe('Snackbar', () => {
  beforeEach(() => { // This creates a fresh pinia and makes it active so it's automatically picked up by any useStore() call without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('initially closed', () => {
    const snackbar = useSnackbar()
    
    expect(snackbar.show).to.be.false
  })

  it('initially empty', () => {
    const snackbar = useSnackbar()
    
    expect(snackbar.color).to.equal('')
    expect(snackbar.icon).to.equal('')
    expect(snackbar.text).to.equal('')
  })

  it('toggleable snackbar', () => {
    const snackbar = useSnackbar()

    expect(snackbar.show).to.be.false

    snackbar.toggleSnackbar({
      color: 'Sample Color',
      icon: 'Sample Icon',
      text: 'Sample Text'
    })
    
    expect(snackbar.show).to.be.true
    expect(snackbar.color).to.equal('Sample Color')
    expect(snackbar.icon).to.equal('Sample Icon')
    expect(snackbar.text).to.equal('Sample Text')

    snackbar.toggleSnackbar()

    expect(snackbar.show).to.be.false
  })
})