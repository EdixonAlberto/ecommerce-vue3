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
              <div>color</div>
            </div>

            <div class="data">
              <h3>Size:</h3>
              <div>size</div>
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
              <buy-add :trunk="user.trunk" box-width="auto" />
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
  </div>
</template>

<script>
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

    return {
      products,
      product,
      user
    }
  }
}
</script>

<style lang="scss" scoped src="./Home.scss" />
