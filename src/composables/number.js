export function useNumberOnly() {
  function integerNumberOnly(event) {
    const key_code = event.which ? event.which : event.keyCode

    // Prevent non-numeric
    if (key_code > 31 && (key_code < 48 || key_code > 57)) {
      event.preventDefault()
      return
    }
  }

  function floatNumberOnly(event, value) {
    const key_code = event.which ? event.which : event.keyCode

    // Check if decimal already exist to prevent
    if (key_code === 46 && value) {
      if (value.includes('.')) {
        event.preventDefault()
      }
  
      return
    }

    integerNumberOnly(event)
  }

  return {
    integerNumberOnly,
    floatNumberOnly
  }
}