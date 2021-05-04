import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { FontAwesomePlugin } from './plugins/FontAwesome.plugin'

// ASSETS
import '~ASSETS/scss/main.scss'

// PLUGINS
const loadComponent = createApp(App).component
let components = FontAwesomePlugin.install(loadComponent)

// START
components.use(store).use(router).mount('#app')
