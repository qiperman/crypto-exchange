import Vue from 'vue'
import config from '@/AppConfig'

Vue.filter('filePath', (filePath) => {
  if (filePath === null || !filePath.length) return null

  filePath = filePath.charAt(0) === '/' ? filePath.slice(1) : filePath

  return `${config.images.basePath}/${filePath}`
})
