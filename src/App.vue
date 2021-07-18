<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>count: {{count}} </div>
  <button @click="increments()">Up vote</button>
  <div id="computed-basics">
    <p>Has published books:</p><span>{{ publishedBooksMessage }}</span>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      message: 'Helo Vuejs3!',
      count : 1,
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      },
    }
  },
  computed: {
    // 算出 getter 関数
    publishedBooksMessage()  {
      // `this` は vm インスタンスを指す
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },
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
