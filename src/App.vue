<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ButtonCounter :initialCounter='1' />
  </div>
</template>

<script>
import ButtonCounter from '@/components/ButtonCounter.vue';

export default {
  name: 'App',
  data() {
    return {
      searchText:'',
      author : { name: 'Veronica', company: 'Microsoft'},
    };
  },
  components : {
    ButtonCounter,
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
