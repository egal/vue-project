<template>
<component :is="layout">
  <router-view />
</component>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: {},
  computed: {
    layout() {
      return (this.$route.meta.layout || 'default-layout')
    }
  }
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
