<template>
  <component :is="layout">
    <template v-slot:content>
      <router-view />
    </template>
  </component>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: {},
  computed: {
    layout() {
      return this.$route.meta.layout || 'default-layout'
    },
  },
})
</script>

<style lang="scss">
@import 'src/assets/variables';
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: $open-sans-font;
}
h5 {
  font-size: $h5-font-size;
  font-weight: $h5-font-style;
}
</style>
