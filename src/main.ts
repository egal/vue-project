import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import DefaultLayout from './layouts/DefaultLayout.vue'
// @ts-ignore
import egalWidgets from 'egal-widgets/dist/egal-widgets-build.umd.js'
import 'egal-widgets/dist/style.css'
const app = createApp(App)
app
  .use(router)
  .component('default-layout', DefaultLayout)
  .use(egalWidgets)
  .mount('#app')
