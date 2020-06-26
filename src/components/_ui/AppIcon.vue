<template>
  <svg :viewBox="icon.viewBox" class="fill-current" :width="size" :height="size" :style="{width: size, height: size}">
    <use :xlink:href="icon.url" />
  </svg>
</template>

<script>
export default {
  name: 'AppIcon',
  props: {
    name: {
      type: String
    },
    size: {
      default: '24px'
    }
  },
  data () {
    return {
      icon: null
    }
  },
  created () {
    let icon = require(`@/assets/icons/${this.name}.svg`)
    if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
      icon = icon.default
    }
    this.icon = icon
  }
}
</script>
