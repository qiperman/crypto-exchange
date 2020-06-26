import axios from 'axios'
import config from '../AppConfig'

const api = axios.create({
  baseURL: config.api.baseUrl
})

export default api
