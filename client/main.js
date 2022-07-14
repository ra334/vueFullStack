import { createApp } from 'vue'
import App from './App'

import router from './router/index'


require('normalize.css')
import './assets/style/reset.scss'


const app = createApp(App)

app.use(router)

app.mount('#app')