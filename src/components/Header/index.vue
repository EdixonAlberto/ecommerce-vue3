<template>
  <header class="eco-inline">
    <div class="logo">Ecommerce Vue3</div>

    <nav>
      <ul class="eco-list">
        <li>
          <router-link class="eco-unlink" to="#">
            <div class="icon-container">
              <i class="fa fa-search" aria-hidden="true"></i>
            </div>
          </router-link>
        </li>

        <li>
          <router-link class="eco-unlink" to="#">
            <div class="icon-container">
              <i class="fa fa-heart-o" aria-hidden="true"></i>
            </div>
          </router-link>
        </li>

        <li>
          <router-link class="eco-unlink" to="#">
            <div class="icon-container">
              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </div>
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="account">
      <button class="eco-btn">Login</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped src="./Header.scss" />
