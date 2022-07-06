import { createApp } from 'vue'
import App from './App'
import router from './router/index'


require('normalize.css')
import './assets/style/reset.scss'

const app = createApp(App)

app.use(router)
    // components.forEach(component => {
    //     app.component(component.name, component)
    // })

app.mount('#app')