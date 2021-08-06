<template>
  <footer>
    <section class="copy">
      <h2>Ecommerce Vue3</h2>
      <!-- prettier-ignore -->
      <p>&copy; Copyright 2021. Create by <a href="https://github.com/EdixonAlberto" target="_blank" rel="noopener noreferrer">Edixon</a></p>
    </section>

    <section class="networks">
      <a class="network eco-unlink eco-btn" href="#" target="_blank" rel="">
        <fa :icon="['fab', 'facebook']" />
      </a>

      <a class="network eco-unlink eco-btn" href="#" target="_blank" rel="">
        <fa :icon="['fab', 'twitter']" />
      </a>

      <a class="network eco-unlink eco-btn" href="#" target="_blank" rel="">
        <fa :icon="['fab', 'linkedin']" />
      </a>

      <a class="network eco-unlink eco-btn" href="#" target="_blank" rel="">
        <fa :icon="['fab', 'instagram']" />
      </a>
    </section>

    <section class="payments">
      <fa :icon="['fab', 'cc-paypal']" />
      <fa :icon="['fab', 'cc-mastercard']" />
      <fa :icon="['fab', 'cc-visa']" />
      <fa :icon="['fab', 'cc-discover']" />
    </section>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped src="./Footer.scss" />
