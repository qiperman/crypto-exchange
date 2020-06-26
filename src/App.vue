<template>
  <div id="app" class="bg-background min-h-full-vh max-w-full-vw flex justify-center flex-col items-center p-4">

    <div class="inline-block">
      <h1 class="text-4xl sm:text-5xl text-primary font-semibold leading-none mb-4 sm:mb-2">Crypto Exchange</h1>
      <h2 class="text-2xl sm:text-3xl text-dark mb-8 ml-1 leading-none">Exchange fast and easy</h2>

      <div class="flex md:inline-flex pb-4 flex-col md:flex-row">
        <app-input-select :currencies="currencies" v-model="model" :min="min" :danger="min !== null && Number(model.value) < min"/>

        <div class="flex items-center justify-center md:py-0 text-primary p-4 -mt-4">
          <app-icon name="SwapIcon" size="2.5rem"/>
        </div>
        <app-input-select :currencies="currencies" v-model="model2" readonly/>
      </div>

      <div class="text-center text-danger text-lg" v-if="isDisabled">
        This pair is disabled now
      </div>

      <div class="mt-4 flex md:items-end flex-col md:flex-row">
        <app-input label="Yor Ethereum address" class="flex-1"/>

        <app-button class="mt-8 md:ml-8 md:mt-0">EXCHANGE</app-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      currencies: [],
      model: {
        value: null,
        currency: 'btc'
      },
      model2: {
        value: null,
        currency: 'eth'
      },
      min: 0,
      isDisabled: false
    }
  },
  methods: {
    async updateEstimated () {
      this.model2.value = ''

      if (this.model.value === null || (this.min !== null && this.min > Number(this.model.value))) {
        if (this.min !== null) {
          this.isDisabled = false
        }
        this.model2.value = '-'
        return false
      }

      const { data } = await this.$api.getEstimated(this.model.currency, this.model2.currency, this.model.value)

      if (data === null) {
        this.isDisabled = true
        this.model2.value = '-'
      } else {
        this.isDisabled = false
        this.model2.value = data
      }
    },
    async updateMin () {
      const { data } = await this.$api.getMin(this.model.currency, this.model2.currency)

      if (data === null) {
        this.isDisabled = true
      } else {
        this.min = Number(data.min)

        if (Number(this.model.value) < this.min) {
          this.model.value = this.min
        }

        this.updateEstimated()
      }
    },
    async getCurrencies () {
      const { data } = await this.$api.getAllCurrencies()
      this.currencies = data
      this.updateMin()
    }
  },
  created () {
    this.getCurrencies()
  },
  watch: {
    'model.currency' () {
      this.updateMin()
    },
    'model2.currency' () {
      this.updateMin()
    },
    'model.value' () {
      this.updateEstimated()
    }
  }
}
</script>
