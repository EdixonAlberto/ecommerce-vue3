import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { fontAwesomePlugin } from './plugins/fontAwesome.plugin'
// ASSETS
import './scss/main.scss'

const app = createApp(App)

// PLUGINS
app.use(router)
app.use(store)
app.use(fontAwesomePlugin)

// GLOBALS
app.config.globalProperties.$PROJECT_NAME = 'eCommerce Vue3'

// START
app.mount('#app')
