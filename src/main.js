import 'babel-polyfill'
import './common/scss/index.scss'
import 'element-ui/lib/theme-chalk/index.css'
import './element-variables.scss'

import Vue from 'vue'
import App from './App'
import router from './router'
import { Pagination, Loading, Card, Form, FormItem, Input, Button, Upload } from 'element-ui'
import Pin from 'vue-pin'
import VueScrollTo from 'vue-scrollto'

Vue.config.productionTip = false

Vue.use(Pagination)
Vue.use(Loading)
Vue.use(Card)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Upload)
Vue.use(Pin)
Vue.use(VueScrollTo)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
