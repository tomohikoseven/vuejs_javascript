<template>
  <!-- <input :value="innerText" @input="$emit('updateValue', $event.target.value)"/> -->
  <input :value="innerText" @input="fInnerText($event.target.value)"/>
  <!-- <input v-model="innerText" /> -->
</template>

<script>

export default {
  name: 'CustomInput',
  props: ['modelValue'],
  computed: {
    innerText: {
      get() {
        return this.$props.modelValue;
      },
    }
  },
  methods: {
    fInnerText(value) {
        //let regstr = this.$props.modelValue.replace(/[0-9]/g, "" );
        let regstr = value.replace(/[0-9]/g, "" );
        console.log('Child:', regstr);
        this.$emit('my-input', regstr);
    },
  }
}
</script>

