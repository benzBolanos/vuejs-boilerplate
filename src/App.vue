<template>
  <div id="app">

    <Header></Header>

    <div class="route-container">
      <router-view></router-view>
    </div>

    <Footer></Footer>
  </div>

</template>

<style lang="scss">
  @import "./assets/styles/main.scss";
</style>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
