<template>
  <input :value="test" @input="test = $event.target.value"/>
  <p> p: {{ modelValue }} </p>
  <p> {{ test }} </p>
</template>

<script>

export default {
  name: 'CustomInput',
  props: ['modelValue'],
  data() {
    return {
      test: this.modelValue,
    };
  }
}
</script>

