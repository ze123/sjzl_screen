import Vue from 'vue'
import screen from './screen.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(screen),
}).$mount('#screen')
