<template>
  <div class="login">
    <div class="login-wrapper padding">
      <div class="login-wrapper-form">
        <input class="primary-input" v-model="loginid" type="text"  placeholder="Login ID">
        <input class="primary-input" v-model="password" type="text" placeholder="Password">
        <b-button class="primary-button" :size="'lg'">Log in</b-button>
        {{ loginid }}
      </div>
      <div class="login-wrapper-content">
        <router-link class="recover-link" :to="'my-page'">Recover lost Login ID or Password</router-link>
        <div class="instruction">
          To use WordEngine, your speakers or headphones must be switched on.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
