import Vue from 'vue';
import './plugins/bootstrap';
import './plugins/svgicons';
import './plugins/vuefilters';
import App from './App.vue';
import router from './router';
import store from './store';

import './scss/index.scss';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
