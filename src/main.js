import Vue from 'vue'
import App from './App.vue'
import store from '../src/components/vuex/store'
import './registerServiceWorker'
import router from './router'
import 'material-components-web'
import 'material-design-icons'



Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
