<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p>
    firstName:<input v-model="firstName">
    lastName:<input v-model="lastName" />
  </p>
  <p>fullname: {{ fullName }}</p>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      firstName:'',
      lastName:'',
    };
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
