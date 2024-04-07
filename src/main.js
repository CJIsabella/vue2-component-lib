import Vue from 'vue'
import App from './App.vue'
import cjUI from 'cj-ui'

Vue.config.productionTip = false
Vue.use(cjUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
