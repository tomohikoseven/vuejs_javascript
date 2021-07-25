<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ButtonCounter :initialCounter='1' />
    <DatePicker data-status="activated" @change="submitChange" />
  </div>
</template>

<script>
import ButtonCounter from '@/components/ButtonCounter.vue';
import DatePicker from '@/components/DatePicker.vue';

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
    DatePicker,
  },
  methods : {
    submitChange(event) {
      console.log(event.target.value);
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
