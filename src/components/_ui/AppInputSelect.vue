<template>
  <div>
    <div v-click-outside="() => {closeOptions()}"
         class="border border-solid border-dark rounded flex md:inline-flex bg-white relative"
         :class="{'border-danger': danger}"
    >
      <div class="flex-1">
        <input class="outline-none w-full h-full font-body text-2xl px-4 rounded"
               type="text"
               v-model="currentValue"
               @keypress="$validateInput($event, 'udouble')"
               v-bind="$attrs"
        >
      </div>
      <div class="border-l border-solid border-dark p-4 flex items-center cursor-pointer" @click="isActive = true">
        <div class="mr-4 flex items-center justify-center flex-1 h-8 w-6" v-if="currentCurrency">
          <img :src="currentCurrency.image | filePath" alt="">
        </div>
        <span class="text-2xl uppercase" v-if="currentCurrency">{{currentCurrency.symbol}}</span>
      </div>

      <transition name="fade">
        <div class="bg-white absolute z-10" style="top: -1px; right: -1px; left: -1px;" v-show="isActive">
        <div class="w-full h-full border border-solid border-dark border-b-light rounded-t relative">
          <input type="text"
                 class="outline-none w-full h-full font-body text-2xl p-4 py-5 rounded"
                 placeholder="Search"
                 ref="searchInput"
                 v-model="searchString"
                 @keydown="onSearchKeyDown">

          <div class="absolute color-light cursor-pointer z-20 flex items-center justify-center"
               @click.stop="closeOptions" style="right: 1rem; top: 50%; transform: translateY(-50%)">
            <app-icon name="CloseIcon" size="1rem"/>
          </div>
        </div>
        <div class="border border-solid border-dark border-t-0 rounded-b overflow-y-auto" ref="dropdownMenu"
             style="max-height: 290px">
          <template v-if="filteredCurrencies.length">
            <div class="flex items-center p-4 cursor-pointer"
                 :class="{
                'bg-background' : currentCurrency.symbol === currency.symbol || typeAheadPointer === currencyIndex
               }"
                 @click="currentCurrency = currency.symbol"
                 @keypress.enter="currentCurrency = currency.symbol"
                 v-for="(currency, currencyIndex) in filteredCurrencies"
                 @mouseover="typeAheadPointer = currencyIndex"
                 :key="currencyIndex">
              <div class="flex items-center pr-2 flex items-center flex-1">
                <div class="mr-6 w-10 flex items-center justify-center">
                  <img :src="currency.image | filePath" :alt="currency.symbol">
                </div>
                <div class="text-2xl uppercase text-dark">
                  {{currency.symbol}}
                </div>
              </div>
              <div class="text-light text-xl flex-1">
                {{currency.name}}
              </div>
            </div>
          </template>
          <div v-else class="p-4 text-center text-xl uppercase text-dark">
            No currencies found
          </div>
        </div>
      </div>
      </transition>

    </div>

    <div class="text-light uppercase ml-2 text-sm" v-if="min !== null" :class="{'text-danger': danger}">
      Min: {{min}}
    </div>
  </div>
</template>

<script>
import pointerScroll from '@/mixins/pointerScroll'

export default {
  name: 'AppInputSelect',
  mixins: [pointerScroll],
  props: {
    value: {},
    currencies: {
      type: Array,
      required: true
    },
    min: {
      type: [Number, Object],
      default () {
        return null
      }
    },
    danger: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      isActive: false,
      searchString: '',
      typeAheadPointer: -1
    }
  },
  computed: {
    filteredCurrencies () {
      if (!this.searchString.length) return this.currencies

      const search = this.searchString.trim().toLowerCase()

      return this.currencies.filter(currency => currency.symbol.toLowerCase().includes(search) || currency.name.toLowerCase().includes(search))
    },
    currentValue: {
      get () {
        return this.value.value
      },
      set (v) {
        const value = this.value
        value.value = v
        value.value = value.value.replace(/,/g, '.').replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')

        if (value.value.indexOf('.') === 0) {
          value.value = value.value.substring(1)
        }

        this.$emit('input', value)
      }
    },
    currentCurrencyIndex () {
      return this.filteredCurrencies.findIndex(cur => cur.symbol === this.value.currency)
    },
    currentCurrency: {
      get () {
        return this.currencies.find(cur => cur.symbol === this.value.currency)
      },
      set (v) {
        const value = this.value
        value.currency = v
        this.$emit('input', value)
        this.isActive = false
      }
    }
  },
  methods: {
    closeOptions () {
      this.isActive = false
    },
    typeAheadUp () {
      this.typeAheadPointer = this.typeAheadPointer - 1 < 0 ? 0 : this.typeAheadPointer - 1
      this.maybeAdjustScroll()
    },
    typeAheadDown () {
      this.typeAheadPointer = this.typeAheadPointer + 1 > this.filteredCurrencies.length - 1 ? this.filteredCurrencies.length - 1 : this.typeAheadPointer + 1
      this.maybeAdjustScroll()
    },
    onSearchKeyDown (e) {
      const keyCode = e.which ? e.which : e.keyCode

      switch (keyCode) {
        case 13:
          if (this.typeAheadPointer >= 0 && this.typeAheadPointer <= this.filteredCurrencies.length) {
            this.currentCurrency = this.filteredCurrencies[this.typeAheadPointer].symbol
          }
          break
        case 27:
          this.isActive = false
          break
        case 38:
          e.preventDefault()
          this.typeAheadUp()
          break
        case 40:
          e.preventDefault()
          this.typeAheadDown()
          break
      }
    }
  },
  watch: {
    isActive () {
      if (this.isActive) {
        this.typeAheadPointer = this.currentCurrencyIndex
        this.$nextTick(() => {
          this.maybeAdjustScroll()
          this.$refs.searchInput.focus()
        })
      } else {
        this.searchString = ''
      }
    }
  }
}
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
