import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { lazyLoading } from '@/utility/lazyLoading'

const app = createApp(App)
app.directive('lazy', lazyLoading)
app.use(createPinia())
app.use(router)

app.mount('#app')
