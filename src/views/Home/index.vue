<template>
  <div class="home">
    <div class="banner"></div>

    <section class="products">
      <div class="card-container">
        <div class="card product-title">
          <h2>Products</h2>
        </div>

        <div class="card" v-for="product of products" :key="product.id">
          <img :src="product.img" :alt="product.name" />

          <div class="overcard">
            <p class="title" v-text="product.name"></p>

            <div class="star">
              <fa :icon="['far', 'star']" />
              <span class="star" v-text="product.stars"></span>
            </div>

            <div class="pay absolute">
              <p><span>$ 100</span> $ {{ product.price }}</p>

              <button class="eco-btn">
                <span>Buy now</span>
              </button>
            </div>

            <div class="add absolute">
              <fa :icon="['far', 'heart']" />
              <fa :icon="['fas', 'shopping-cart']" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="eco-container">
        <h2>Lorem ipsum dolor sit amet</h2>

        <div class="steps">
          <div v-for="(item, i) of [1, 2, 3]" :key="i" class="card-step">
            <div class="icon">icon</div>
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem
              corrupti expedita maxime beatae alias cupiditate labore reiciendis a non
              libero.
            </p>
            <router-link to="#">Read More</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import productsMock from '~DATA/products-mock.json'

export default {
  name: 'Home',

  setup() {
    const products = productsMock

    return {
      products
    }
  }
}
</script>

<style lang="scss" scoped src="./Home.scss" />
