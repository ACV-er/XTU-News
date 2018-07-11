import 'babel-polyfill'
import './common/scss/index.scss'
import 'element-ui/lib/theme-chalk/index.css'
import './element-variables.scss'

import Vue from 'vue'
import App from './App'
import router from './router'
import { Pagination } from 'element-ui'

Vue.config.productionTip = false

Vue.use(Pagination)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
