<template>
	<div id="app" :class="{'dark': appDarkTheme}">
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

	computed: {
		appDarkTheme: {
			get: function () {
				return this.$store.state.appDarkTheme;
			},
			set: function (newValue) {
				this.$store.state.appDarkTheme = newValue;
			},
		},
	},

	watch: {
		$route(to, from) {
			document.title = to.meta.title || "IBUY.ART";
		},
	},
	mounted() {
	
		if (document.cookie === "isAppThemeDark=true") {
			this.appDarkTheme=true;
		} else {
			this.appDarkTheme=false;
		}
	}
};
</script>

<style lang="scss">
#app {
	background: #dbdbdb;
	color: $black;
	transition: $transition-md ease;

	&.dark {
		background: #222222;
		color: #ffffff;
	}
}
</style>
