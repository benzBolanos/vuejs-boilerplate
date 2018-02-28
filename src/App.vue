<template>
  <div id="app">  
    <div class="route-container">
      <Header></Header>

       <router-view></router-view>

      <Footer></Footer>
    </div>
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
