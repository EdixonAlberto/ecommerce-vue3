<template>
  <eco-header />

  <div class="app-container">
    <router-view />
  </div>

  <eco-footer />
</template>

<script>
import EcoHeader from '@/components/Header'
import EcoFooter from '@/components/Footer'

export default {
  components: {
    EcoHeader,
    EcoFooter
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  margin-top: $height-header;
}
</style>
