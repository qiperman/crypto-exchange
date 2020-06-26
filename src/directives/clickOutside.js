import Vue from 'vue'

Vue.directive('click-outside', {
  bind: function (el, binding) {
    const bubble = binding.modifiers.bubble
    const handler = (e) => {
      if (bubble || (!el.contains(e.target) && el !== e.target)) {
        binding.value(e)
      }
    }
    el.__vueClickOutside__ = handler
    document.addEventListener('click', handler)
  },

  unbind: function (el) {
    document.removeEventListener('click', el.__vueClickOutside__)
    el.__vueClickOutside__ = null
  }
})
