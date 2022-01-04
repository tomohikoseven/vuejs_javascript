<template>
  <div id="app">
    <div>
    <img alt="Vue logo" src="./assets/logo.png">
    </div>
    <templateSyntax message="i am hero!"/>
    <TodoApp />
    <CustomInputs :modelValue="testInput" @my-input="changeText($event)" />
  </div>
</template>

<script>
import templateSyntax from "@/components/template-syntax";
import TodoApp from "@/components/TodoApp";
import CustomInputs from "@/components/CustomInputs";

export default {
  name: 'App',
  data() {
    return {
      searchText:'',
      testInput: 'a123',
      author : { name: 'Veronica', company: 'Microsoft'},
    };
  },
  components : {
    templateSyntax,
    TodoApp,
    CustomInputs,
  },
  methods : {
    submitChange(event) {
      console.log(event.target.value);
    },
    changeText(event){
      this.testInput = event;
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
