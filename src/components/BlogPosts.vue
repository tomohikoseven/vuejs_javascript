<template>
  <h4>{{ title }}</h4>
  <h5>author: {{ name }}</h5>
  <p>company: {{ company }} </p>
</template>

<script>
export default {
  name: 'blog-post',
  props: {title:String, name:String, company:String},
}
</script>