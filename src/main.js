import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './custom.sass';

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
//Vue.use(Gallery)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
