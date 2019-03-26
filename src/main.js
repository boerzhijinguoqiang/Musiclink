// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './axios'
import rem from '../static/js/rem.js'
// import $ from '../static/js/jquery-1.11.0'
import MintUI from 'mint-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/////////////引入视频配置
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
/////////////
import 'mint-ui/lib/style.css'
//import $ from 'jquery'
import '../static/css/reset.css'
Vue.config.productionTip = false
Vue.prototype.axios = axios;
/* eslint-disable no-new */
Vue.use(MintUI)
Vue.use(ElementUI)
Vue.use(rem)
// Vue.use($)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
