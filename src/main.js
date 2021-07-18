import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
const vm = app.mount('#app');

vm.increments();
console.log(vm.count);