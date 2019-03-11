<template lang="html">
  <div class="h">
    <h1 v-model='title' >{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      title: 'Home Page',
    }
  },
}
</script>

<style lang="css">
</style>
