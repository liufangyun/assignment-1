import Vue from 'vue'
import App from './App.vue'
import form from './components/form.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(form)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
