import { setActivePinia, createPinia } from 'pinia'
import { useAlertMessage } from '@/stores/alert.js'

describe('Alert Message', () => {
  beforeEach(() => { // This creates a fresh pinia and makes it active so it's automatically picked up by any useStore() call without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('initially closed', () => {
    const alert_message = useAlertMessage()
    
    expect(alert_message.alert.show).to.be.false
  })

  it('shows alert', () => {
    const alert_message = useAlertMessage()

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
    const alert_message = useAlertMessage()
    alert_message.showNotAvailable()

    expect(alert_message.alert).to.have.keys('show', 'width', 'status', 'title')
    expect(alert_message.alert.show).to.be.true
  })

  it('handle action', () => {
    const alert_message = useAlertMessage()
    alert_message.handleAction()

    expect(alert_message.alert.show).to.be.false
  })
})