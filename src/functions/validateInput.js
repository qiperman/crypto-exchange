import Vue from 'vue'

const validateInput = (e, type = 'text') => {
  const keyCode = e.which ? e.which : e.keyCode

  if (type === 'double') {
    if (!((keyCode >= 48 && keyCode <= 57) || keyCode === 46 || keyCode === 44 || keyCode === 45)) {
      e.preventDefault()
    }
  } else if (type === 'udouble') {
    if (!((keyCode >= 48 && keyCode <= 57) || keyCode === 46 || keyCode === 44)) {
      e.preventDefault()
    }
  } else if (type === 'int') {
    if (!((keyCode >= 48 && keyCode <= 57) || keyCode === 45)) {
      e.preventDefault()
    }
  } else if (type === 'uint') {
    if (!((keyCode >= 48 && keyCode <= 57))) {
      e.preventDefault()
    }
  } else {
    return true
  }
}

export default validateInput

Vue.prototype.$validateInput = validateInput
