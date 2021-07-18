<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <BlogPost title="foo bar"></BlogPost>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost.vue';

export default {
  name: 'App',
  data() {
    return {
    };
  },
  components : {
    BlogPost,
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
