<template>
  <div id="app">
   <div class="m">123</div>
   <test></test>
   <test1></test1>
  </div>
</template>

<script>
import {test1} from 'cj-ui'

export default {
  name: 'App',
  components: {
    test1
  },
}
</script>

<style lang="scss">
#app {
  .m {
    color: red;
  }
}
</style>
