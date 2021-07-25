<template>
  <div>
   <button @click="count++">
      You clicked me {{ count }} times.
    </button>
  </div>
</template>

<script>

export default {
  name: 'button-counter',
  props: ['initialCounter'],
  data() {
    return {
      count : this.initialCounter,
    };
  },
}
</script>