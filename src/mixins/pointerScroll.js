export default {
  methods: {
    maybeAdjustScroll () {
      const optionEl =
        this.$refs.dropdownMenu?.children[this.typeAheadPointer] || false

      if (optionEl) {
        const bounds = this.getDropdownViewport()
        const { top, bottom, height } = optionEl.getBoundingClientRect()

        if (top < bounds.top) {
          return (this.$refs.dropdownMenu.scrollTop = optionEl.offsetTop - (height + top))
        } else if (bottom >= bounds.bottom) {
          return (this.$refs.dropdownMenu.scrollTop =
            optionEl.offsetTop - (bounds.height - height))
        }
      }
    },
    getDropdownViewport () {
      return this.$refs.dropdownMenu
        ? this.$refs.dropdownMenu.getBoundingClientRect()
        : {
          height: 0,
          top: 0,
          bottom: 0
        }
    }
  }
}
