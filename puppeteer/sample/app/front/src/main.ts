import Vue from 'vue';
import App from './app.vue';
import router from './router';
import SpiderService from '@/views/spider.service';


Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
    provide: {
        spiderService: () => new SpiderService(),
    },
}).$mount('#app');
