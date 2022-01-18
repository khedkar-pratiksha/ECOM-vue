import Vue from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.all.min.js'
import router from './router/index'
import store from './store/store';
import Vuelidate from 'vuelidate'
Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueSweetalert2)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')