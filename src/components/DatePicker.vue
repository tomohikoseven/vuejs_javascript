<template>
  <div class="date-picker">
    <input type="datetime-local" />
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {
    console.log(this.$attrs);
  }
}
</script>
