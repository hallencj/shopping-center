import { setActivePinia, createPinia } from 'pinia'
import { useUser } from '@/stores/user.js'

describe('User', () => {
  beforeEach(() => { // This creates a fresh pinia and makes it active so it's automatically picked up by any useStore() call without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('initially logged-out', () => {
    const user = useUser()
    
    expect(user.credentials.logged_in).to.be.false
    expect(localStorage.getItem('user-credentials')).not.to.exist
  })
  
  it('toggleable logged-in', () => {
    const user = useUser()

    expect(user.credentials.logged_in).to.be.false
    expect(localStorage.getItem('user-credentials')).not.to.exist
    
    user.toggleLoggedIn()

    expect(user.credentials.logged_in).to.be.true
    expect(localStorage.getItem('user-credentials')).to.exist
  })

  it('verified credentials', () => {
    const user = useUser()
    user.toggleLoggedIn()
    
    expect(JSON.parse(localStorage.getItem('user-credentials'))).to.have.all.keys('logged_in', 'first_name', 'last_name', 'username_email', 'address', 'contact_number', 'preferred_mode_of_payment')
  })
})