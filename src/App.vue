<template>
  <component :is="layout">
    <template v-slot:content>
      <router-view />
    </template>
  </component>
  <ToasterContainer></ToasterContainer>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'
import variables from '@/assets/variables.scss'
import UserProfile from '@/components/UserProfile.vue'
import Widget from '@/components/Widget'
import router from '@/router'
export default defineComponent({
  name: 'App',
  components: { UserProfile, Widget },
  data() {
    return {}
  },
  created() {
    this.getRequest()
  },
  methods: {
    getRequest() {
      axios
        .get('http://localhost/interface-metadata')
        .then((response) => {
          this.$toaster.info({ message: 'toaster' })
          this.generateRoutes(response.data)
          this.setCssVariables(response.data.app)
        })
        .catch((error) => {
          this.$toaster.info({ message: error })
        })
    },
    generateRoutes(data, links) {
      let loginRoute = data.app.login
      let homeRoute = data.app.home
      let routeList = data
        ? data.pages.current_user_profile.layout.menu.links
        : links
      routeList.push(loginRoute, homeRoute)
      for (let i in routeList) {
        let newRoute = {}
        let parentName = ''
        if (routeList[i].type !== 'nested') {
          newRoute = {
            path: `/${routeList[i].urn}`,
            name: `${routeList[i].label}`,
            component: `${routeList[i].label}`,
            props: routeList[i].props ? true : false,
            meta: routeList[i].meta ? routeList[i].meta : {},
          }
          router.addRoute(newRoute)
        } else {
          parentName = routeList[i].label
          newRoute = {
            name: routeList[i].label,
          }
          router.addRoute(newRoute)
          this.setNestedLinks(routeList[i].links, parentName)
        }
      }
    },
    setNestedLinks(links, parentName) {
      console.log(parentName)
      for (let i in links) {
        let newRoute = {}
        newRoute = {
          path: `/${links[i].urn}`,
          name: `${links[i].label}`,
          component: `${links[i].label}`,
          props: links[i].props ? true : false,
          meta: links[i].meta ? links[i].meta : {},
        }
        router.addRoute('Nested', newRoute)
      }
      console.log(router.getRoutes())
    },
    setCssVariables(vars) {
      let newVars = Object.assign(variables, {
        ...vars.colors,
        font: vars.font,
      })
      console.log(newVars)
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
//body {
//  width: 100%;
//  height: 100vh;
//  display: grid;
//  grid-template-columns: repeat(12, 1fr);
//  grid-template-rows: repeat(12, 1fr);
//}
h5 {
  font-size: $h5-font-size;
  font-weight: $h5-font-style;
}
</style>
