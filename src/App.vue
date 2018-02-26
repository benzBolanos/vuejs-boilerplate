<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<style lang="scss">
  @import "./assets/styles/main.scss";
</style>

<script>
import Header from '@/components/header/header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
