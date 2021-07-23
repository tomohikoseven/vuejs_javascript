<template>
  <input :value="modelValue" @input="$emit('updateValue', $event.target.value)"/>
</template>

<script>

export default {
  name: 'CustomInput',
  props: ['modelValue'],
}
</script>

