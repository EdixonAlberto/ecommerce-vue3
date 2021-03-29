<template>
  <eco-header />
  <div class="app-container">
    <router-view />
  </div>
</template>

<script>
import EcoHeader from '@/components/Header'

export default {
  components: {
    EcoHeader
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  margin-top: 65px;
}
</style>
