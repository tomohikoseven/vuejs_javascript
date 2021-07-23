<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <BlogPosts title="foo bar"></BlogPosts>
    <CustomInputs model-value="増田" />
  </div>
</template>

<script>
import BlogPosts from '@/components/BlogPosts.vue';
import CustomInputs from '@/components/CustomInputs.vue';

export default {
  name: 'App',
  data() {
    return {
      searchText:'',
    };
  },
  components : {
    BlogPosts,
    CustomInputs,
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
