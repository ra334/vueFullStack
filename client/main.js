import { createApp } from 'vue'
import App from './App'
import VueRouter from 'vue-router'

require('normalize.css')
import './assets/style/reset.scss'

// fonts

Vue.use(VueRouter)

const app = createApp(App)

// components.forEach(component => {
//     app.component(component.name, component)
// })

app.mount('#app')