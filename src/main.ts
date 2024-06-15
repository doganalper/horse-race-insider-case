import { createApp } from 'vue'

import './assets/base.css'
import App from './App.vue'
import Store, { globalStateKey } from '@/store'

const app = createApp(App)

app.use(Store, globalStateKey)
app.mount('#app')
