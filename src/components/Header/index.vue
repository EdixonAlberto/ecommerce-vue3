<template>
  <header class="eco-inline">
    <div class="logo">Ecommerce Vue3</div>

    <nav>
      <ul class="navbar eco-list">
        <li class="nav">
          <router-link class="nav-container eco-unlink" to="#">
            <i class="fa fa-search" aria-hidden="true"></i>
          </router-link>
        </li>

        <li class="nav">
          <router-link class="nav-container eco-unlink" to="#">
            <i class="fa fa-heart-o" aria-hidden="true"></i>
          </router-link>
        </li>

        <li class="nav">
          <div
            class="nav-container"
            :class="{ clicked: cart.openMenu }"
            @click="cart.openMenu = !cart.openMenu"
            @mouseleave="cart.openMenu = false"
          >
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
          </div>

          <div v-show="cart.openMenu" class="menu">
            <h3>Shopping Cart</h3>

            <ul>
              <li v-for="(item, i) of [1, 2, 3]" :key="i">{{ i }}</li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>

    <div class="account">
      <button class="eco-btn">Login</button>
    </div>
  </header>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'Header',

  setup() {
    const cart = reactive({
      openMenu: false
    })

    return {
      cart
    }
  }
}
</script>

<style lang="scss" scoped src="./Header.scss" />
