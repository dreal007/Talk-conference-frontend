import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { $http, $axios } from './services/http-service'
import storage from './services/storage-service'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/index.css'

import LoadScript from 'vue-plugin-load-script'
Vue.use(LoadScript);

import VueMoment from 'vue-moment'
import moment from 'moment-timezone'


Vue.use(VueToast, {
  position: 'top',
  duration: 2500,
  queue: true
});

Vue.use($http)
Vue.use($axios)
Vue.use(storage)
Vue.use(VueMoment, {
  moment,
})
// Vue.use(require('vue-moment'));

Vue.config.productionTip = false

new Vue({
  router,
  store,
  http: $http,
  axios: $axios,
  storage,
  render: h => h(App)
}).$mount('#app')
