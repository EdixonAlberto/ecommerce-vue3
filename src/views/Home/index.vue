<template>
  <div class="home">
    <section class="banner">
      <div class="container">
        <div class="content">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere molestiae
            incidunt, provident soluta numquam modi fugiat sed?
          </p>

          <div class="data-container">
            <div class="data">
              <h3>Price:</h3>
              <span>$ 117.99</span>
            </div>

            <div class="data">
              <h3>Color:</h3>
              <div class="color">
                <div
                  v-for="(color, i) of product.colors"
                  :key="i"
                  class="arc"
                  :style="{
                    border: `2px solid ${colorActived === i ? color : 'transparent'}`
                  }"
                >
                  <div :style="{ backgroundColor: color }"></div>
                </div>
              </div>
            </div>

            <div class="data">
              <h3>Size:</h3>
              <div class="size">
                <span
                  v-for="(size, i) of product.sizes"
                  :key="i"
                  v-text="size"
                  :class="{ active: sizeActived === i }"
                ></span>
              </div>
            </div>
          </div>

          <buy-add :trunk="user.trunk" box-width="60%" />
        </div>

        <div class="image"></div>
      </div>
    </section>

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

            <div class="buy">
              <p><span>$ 100</span> $ {{ product.price }}</p>
              <buy-add :trunk="user.trunk" box-width="auto" iconColor="#f6f7fb" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="purchase">
      <div class="step-container">
        <h2>Lorem Ipsum Dolor Sit Amet</h2>

        <div class="steps">
          <div class="card-step">
            <fa :icon="['fas', 'cart-arrow-down']" />
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem
              corrupti.
            </p>
            <router-link to="#">Read more</router-link>
          </div>

          <div class="card-step">
            <fa :icon="['far', 'credit-card']" />
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem
              corrupti.
            </p>
            <router-link to="#">Read more</router-link>
          </div>

          <div class="card-step">
            <fa :icon="['fas', 'shipping-fast']" />
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem
              corrupti.
            </p>
            <router-link to="#">Read more</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="brands">
      <div class="card-container">
        <div class="card">
          <h2 class="title">Lorem ipsum</h2>
          <div class="content">
            <h2>Lorem, ipsum dolor</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, modi.
            </p>

            <button class="eco-btn">
              <span>Browse collection</span>
            </button>
          </div>
          <div class="image"></div>
        </div>

        <div class="card">
          <h2 class="title">Lorem ipsum</h2>
          <div class="content">
            <h2>Lorem, ipsum dolor</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, modi.
            </p>

            <button class="eco-btn">
              <span>Discover more</span>
            </button>
          </div>
          <div class="image"></div>
        </div>
      </div>
      <div class="carousel">
        <img src="/static/img/brands/nike.png" alt="Logo Nice" />
        <img src="/static/img/brands/adidas.png" alt="Logo Adidas" />
        <img src="/static/img/brands/puma.png" alt="Logo Puma" />
        <img src="/static/img/brands/hm.png" alt="Logo HM" />
        <img src="/static/img/brands/reebok.png" alt="Logo Reebok" />
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import BuyAdd from '~COMPONENTS/BuyAdd'
import productsMock from '~DATA/products-mock.json'

export default {
  name: 'Home',

  components: {
    BuyAdd
  },

  setup() {
    const products = productsMock
    const product = productsMock[0]
    const user = { trunk: {} }

    const colorActived = ref(0)
    const sizeActived = ref(1)

    return {
      products,
      product,
      user,
      colorActived,
      sizeActived
    }
  }
}
</script>

<style lang="scss" scoped src="./Home.scss" />
