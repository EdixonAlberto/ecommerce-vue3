<template>
  <div class="buy-add" :style="{ width: boxWidth }">
    <button class="buy eco-btn">
      <span>Buy now</span>
    </button>

    <div class="add">
      <fa class="eco-icon" :style="{ color: iconColor }" :icon="['far', 'heart']" />
      <fa
        class="eco-icon"
        :style="{ color: iconColor }"
        :icon="['fas', 'shopping-cart']"
      />
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
    iconColor: {
      type: String,
      required: false
    },
    trunk: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const { trunk } = toRefs(props)
  }
}
</script>

<style lang="scss" scoped src="./BuyAdd.scss" />
