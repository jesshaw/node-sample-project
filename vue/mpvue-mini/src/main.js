import Vue from 'vue'
import App from './App'

// import 'mpvue-weui/src/style/weui.css'
import 'weui/src/style/weui.less'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
