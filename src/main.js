// main.js
import '@mdi/font/css/materialdesignicons.min.css'
import Vue from 'vue'
import './plugins'
import App from './App.vue'
import router from '@/router'
import store from '@/store/index'

// Filters
import DateFilter from '@/filters/Date'

// Global Components
import PostDialog from '@/components/Posts/PostDialog'

Vue.component('app-post-dialog', PostDialog)

Vue.config.productionTip = false

// Register the filters
Vue.filter('date', DateFilter)
Vue.filter('capitalize', (value) => {
  if (!value && value !== 0) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
Vue.filter('truncate', (value, limit) => {
  return value.substring(0, limit)
})
Vue.filter('tailing', (value, tail) => {
  return value + tail
})

Vue.prototype.$siteName = process.env.VUE_APP_TITLE

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    console.log('App Title: ' +this.$siteName)
  }
}).$mount('#app')
