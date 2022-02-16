<template>
  <component :is="layout">
    <template v-slot:content>
      <router-view />
    </template>
  </component>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'
export default defineComponent({
  name: 'App',
  components: {},
  mounted() {
    // this.getRequest()
  },
  methods: {
    getRequest() {
      let params = {
        filter: [
          {
            field: 'foo',
            operator: 'eq',
            value: 'bar',
          },
        ],
        scopes: ['foo', 'bar'],
      }
      axios.get('http://192.168.1.241/posts', { params: params })
    },
  },
  computed: {
    layout: function () {
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
