<template>
  <div class="login">
    <div class="login-wrapper padding">
      <div class="login-wrapper-form">
        <input class="primary-input" v-model="loginid" type="text"  placeholder="Login ID">
        <input class="primary-input" v-model="password" type="password" placeholder="Password">
        <b-button class="primary-button" :size="'lg'" v-on:click="login(loginid, password)">Log in</b-button>
      </div>
      <div class="login-wrapper-content">
        <router-link class="recover-link" :to="'my-page'">Recover lost Login ID or Password</router-link>
        <div class="instruction">
          To use this, you just use this.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import "./style.scss";
</style>

<script src="./controller.js"></script>
