<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p>
    firstName:<input v-model="firstName">
    lastName:<input v-model="lastName" />
  </p>
  <div :class="{ active: isActive, textdanger: hasError  }"><p>fullname: {{ fullName }}</p></div>
  
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      firstName:'',
      lastName:'',
      isActive: true,
      hasError: true,
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
.active {
  color: red;
}
.textdanger {
  font-weight: bold
}
</style>
