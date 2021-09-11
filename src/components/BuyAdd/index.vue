<template>
  <div class="buy-add" :style="{ width: boxWidth }">
    <button class="buy eco-btn">
      <span>Buy now</span>
    </button>

    <div class="add">
      <fa :icon="['far', 'heart']" />
      <fa :icon="['fas', 'shopping-cart']" />
    </div>
  </div>
</template>

<script>
import { toRefs } from 'vue'

export default {
  props: {
    boxWidth: {
      type: String,
      default: '100%'
    },
    trunk: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const { trunk } = toRefs(props)
    console.log(trunk.value)
  }
}
</script>

<style lang="scss" scoped src="./BuyAdd.scss" />
