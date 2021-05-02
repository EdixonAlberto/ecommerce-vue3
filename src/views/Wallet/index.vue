<template>
  <div class="wallet">
    <div class="container">
      <article>
        <h2>0 BTC</h2>

        <section class="buttons">
          <button class="eco-btn">
            <!-- icon -->
            <span>Withdraw</span>
          </button>

          <button class="eco-btn">
            <!-- icon -->
            <span>Deposit</span>
          </button>
        </section>

        <section class="code-qr">
          <div class="image-qr"></div>

          <p>Send bitcoun (btc) to this address</p>

          <div class="address"></div>
        </section>
      </article>

      <article>My wallet</article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wallet'
}
</script>

<style lang="scss" scoped src="./Wallet.scss" />
