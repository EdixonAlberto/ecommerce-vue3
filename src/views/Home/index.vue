<template>
  <div class="home">
    <div class="banner"></div>

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
export default {
  name: 'Home',

  setup() {}
}
</script>

<style lang="scss" scoped src="./Home.scss" />
