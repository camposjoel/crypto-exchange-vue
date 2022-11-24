import { createApp } from 'vue'
import App from './App.vue'
import Chartick from 'vue-chartkick'
import 'chartkick/chart.js'
import './style.css'
import router from './router'
import { dollarFilter, percentFilter } from './filters'

const app = createApp(App)
app.use(router)
app.use(Chartick)

app.config.globalProperties.$filters = {
  dollarFilter,
  percentFilter
}

app.mount('#app')
