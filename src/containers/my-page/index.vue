<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        asdfasdfa
        <button class="btn btn-primary" v-on:click="switchLocale('en')">English</button>
        <button class="btn btn-success" v-on:click="switchLocale('jp')">Japanese</button>
        <h1 v-html="$t('message.header')"></h1>
      </b-col>
      <b-col>
        asdfasdfasdfdas
        <div class="test" v-test></div>

        <child :parentData="parentData"></child>
      </b-col>
    </b-row>
  </b-container>
</template>

<style src="./style.css" scoped></style>

<script src="./controller.js"></script>
