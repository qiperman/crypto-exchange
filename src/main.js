import Vue from 'vue'
import App from './App.vue'

// Tailwind
import '@/assets/css/tailwind.css'

// Filters
import '@/filters/filtersLoader'

import AppInputSelect from './components/_ui/AppInputSelect'
import AppInput from './components/_ui/AppInput'
import AppButton from './components/_ui/AppButton'
import AppIcon from './components/_ui/AppIcon'

import api from '@/api/ApiFunctions'

import '@/functions/validateInput'
import '@/directives/clickOutside'

Vue.component(AppInputSelect.name, AppInputSelect)
Vue.component(AppInput.name, AppInput)
Vue.component(AppButton.name, AppButton)
Vue.component(AppIcon.name, AppIcon)
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
