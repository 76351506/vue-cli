import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.min.css'
import 'amfe-flexible/index'

const app = createApp(App)
app.use(antd)
app.use(store)
app.use(router)
app.mount('#app')
