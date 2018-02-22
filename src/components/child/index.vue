<template>
  <div>
    <h2>child component!</h2>
    <span>{{ msg }}</span>
    <h1 v-if="this.$store.state.test">{{ parentData }}</h1>
  </div>
</template>

<style src="./child.css" scoped></style>
<script src="./controller.js"></script>
