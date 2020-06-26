<template>
  <div>
    <label :for="_uid" class="text-2xl text-dark" v-if="label">{{label}}</label>
    <input type="text" class="outline-none w-full h-full font-body text-2xl p-4 py-5 rounded border border-solid border-dark" :id="_uid">
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    label: {},
    value: {}
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (v) {
        this.$emit('input', v)
      }
    }
  }
}
</script>
