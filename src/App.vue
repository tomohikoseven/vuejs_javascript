<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p> 
  </div>
  <div>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ messageArea }}</p>
    <br />
    <textarea v-model="messageArea" placeholder="add multiple lines"></textarea>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      message:'',
      messageArea: ''
    };
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
