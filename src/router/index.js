import VueRouter from 'vue-router';
import routes from './routes';

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.afterEach( (to, from) => {
	window.scrollTo({
		'behavior': 'auto',
		'left': 0,
		'top': 0
	});

});

export default router;
