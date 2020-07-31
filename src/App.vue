<template>
	<div id="app">
		<HeaderLayout />
		<transition name="route" mode="out-in">
			<router-view />
		</transition>
		<FooterLayout />
	</div>
</template>

<script>
import HeaderLayout from "@/components/layout/HeaderLayout";
import FooterLayout from "@/components/layout/FooterLayout";

export default {
	components: {
		HeaderLayout,
		FooterLayout,
	},

	watch: {
		$route(to, from) {
			document.title = to.meta.title || 'IBUY.ART';
		}
	},
};
</script>

<style lang="scss">
</style>
