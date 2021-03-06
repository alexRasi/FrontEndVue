import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import VueClipboard from 'vue-clipboard2'
import VTooltip from 'v-tooltip'
import VeeValidate from 'vee-validate';

Vue.use(VTooltip)
Vue.use(VueClipboard)
Vue.use(VeeValidate);
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.config.productionTip = false


Vue.config.productionTip = false;

export const bus = new Vue();

var app= new Vue({
    store: store,
    router,
    render: h => h(App)
}).$mount('#app')

window.app = app;