// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// Element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// normalize.css
import 'normalize.css';
// i18n配置
import i18n from './config/i18n/i18n';
// vuex
import store from './store';

// Element-ui全量引入的国际化
Vue.use(ElementUI, {
    i18n: (key, value) => i18n.t(key, value)
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    i18n,
    store,
    router,
    components: {App},
    template: '<App/>'
});
