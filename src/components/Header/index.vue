<template>
  <header class="eco-inline">
    <div class="logo">
      <span v-text="$PROJECT_NAME"></span>
    </div>

    <nav>
      <ul class="navbar eco-list">
        <li class="nav">
          <router-link class="nav-container eco-unlink" to="#">
            <fa class="eco-icon" :icon="['fas', 'search']" />
          </router-link>
        </li>

        <li class="nav">
          <router-link class="nav-container eco-unlink" to="#">
            <fa class="eco-icon" :icon="['far', 'heart']" />
          </router-link>
        </li>

        <li class="nav">
          <div
            class="nav-container"
            :class="{ clicked: cart.openMenu }"
            @click="cart.openMenu = !cart.openMenu"
            @mouseleave="cart.openMenu = false"
          >
            <fa class="eco-icon" :icon="['fas', 'shopping-cart']" />
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
      <button class="eco-btn">
        <span>Login</span>
      </button>
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
