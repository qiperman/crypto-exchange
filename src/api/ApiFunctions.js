import $http from '@/api/AxiosSettings'
import config from '@/AppConfig'

export default {
  getAllCurrencies () {
    return $http.get('get_all_currencies', {
      params: {
        api_key: config.api.key
      }
    })
  },
  getMin (from, to) {
    return $http.get('get_ranges', {
      params: {
        currency_from: from,
        currency_to: to,
        api_key: config.api.key
      }
    })
  },
  getEstimated (from, to, amount) {
    return $http.get('get_estimated', {
      params: {
        currency_from: from,
        currency_to: to,
        api_key: config.api.key,
        amount: amount
      }
    })
  }
}
