<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <BlogPosts title="foo bar" v-bind="author"></BlogPosts>
    <CustomInputs :model-value="searchText" @updateValue="searchText = $event" />
    <p> {{ searchText }} </p>
    <alert-box>Something bad happened</alert-box>
  </div>
</template>

<script>
import BlogPosts from '@/components/BlogPosts.vue';
import CustomInputs from '@/components/CustomInputs.vue';
import AlertBox from '@/components/AlertBox.vue';

export default {
  name: 'App',
  data() {
    return {
      searchText:'',
      author : { name: 'Veronica', company: 'Microsoft'},
    };
  },
  components : {
    BlogPosts,
    CustomInputs,
    AlertBox,
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
