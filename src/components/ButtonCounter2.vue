<template>
  <button @click="count++">Button counter: {{ count }}</button>
</template>

<script>

export default {
  name: 'button-counter2',
  props: ['initialCounter'],
  data() {
    return {
      count : this.initialCounter,
    };
  },
}
</script>
