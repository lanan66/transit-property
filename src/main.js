import { createApp } from 'vue'
import '../src/assets/static/css/normalize.css'
import App from './App.vue'
import router from '../routers/router'

const app = createApp(App)
app.use(router)
   .mount('#app')