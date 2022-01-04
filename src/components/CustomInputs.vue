<template>
  <input :value="modelValue" @input="fInnerText($event.target.value)"/>
</template>

<script>

export default {
  name: 'CustomInput',
  props: ['modelValue'],
  methods: {
    fInnerText(value) {
        let regstr = value.replace(/[0-9]/g, "" );
        this.$emit('my-input', regstr);
    },
  }
}
</script>

