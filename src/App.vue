<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>count: {{count}} </div>
  <button @click="increments()">Up vote</button>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      message: 'Helo Vuejs3!',
      count : 1
    }
  },
  methods : {
    increments() {
      this.count++;
    }
  }
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
