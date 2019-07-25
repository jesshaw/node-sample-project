import Vue from 'vue'
import App from './App'
import 'mpvue-weui/src/style/weui.css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    // 这个字段下的数据会被填充到 app.json ／ page.json
    pages: [
      '^pages/index/main',
      'pages/order/main',
      'pages/profile/main',
      'pages/counter/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#999',
      backgroundColor: '#fafafa',
      selectedColor: '#333',
      borderStyle: 'white',
      position: 'bottom',
      list: [{
        text: '首页',
        pagePath: 'pages/index/main',
        iconPath: 'static/images/home.png',
        selectedIconPath: 'static/images/home-active.png'
      }, {
        text: '订单',
        pagePath: 'pages/order/main',
        iconPath: 'static/images/search.png',
        selectedIconPath: 'static/images/search-active.png'
      }, {
        text: '我的',
        pagePath: 'pages/profile/main',
        iconPath: 'static/images/profile.png',
        selectedIconPath: 'static/images/profile-active.png'
      }]
    }
  }
}
