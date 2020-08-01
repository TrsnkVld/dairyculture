<template>
	<footer class="footer" :class="{'dark': appDarkTheme}">
		<b-container>
			<b-nav class="footer-nav justify-content-between justify-content-md-around align-items-center">
				<b-nav-item
					class="footer-nav__item"
					:to="{name: item.url}"
					v-for="(item, index) in links"
					:key="index"
				>
					<svgicon height="30" :name="item.icon" />
					<span v-html="item.title" class="d-none d-md-block" />
				</b-nav-item>
			</b-nav>
		</b-container>
	</footer>
</template>

<script>
export default {
	name: "FooterLayout",
	data: () => ({
		links: [
			{
				icon: "feed",
				title: "Feed",
				url: "home",
			},
			{
				icon: "gallery",
				title: "Gallery",
				url: "home",
			},
			{
				icon: "deals",
				title: "Deals",
				url: "home",
			},
			{
				icon: "notify",
				title: "Notify",
				url: "home",
			},
			{
				icon: "profile",
				title: "Profile",
				url: "home",
			},
		],
	}),

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
};
</script>

<style lang="scss">
.footer {
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 1;
	width: 100%;
	background: rgba(232, 232, 232, 0.9);
	transition: background $transition-md ease;

	&-nav {
		padding: 15px 10px !important;
		pointer-events: all;
		max-width: 910px;
		margin: 0 auto;

		&__item {
			a {
				display: flex;
				flex-flow: column;
				justify-content: center;
				align-items: center;
				text-align: center;
				padding: 0;
			}

			path {
				transition: fill $transition ease;
			}

			span {
				margin-top: 12px;
			}
		}

		@include up($md) {
			background: rgba(232, 232, 232, 0.9);
			border-radius: 45px;
		}
	}

	@include up($md) {
		bottom: 20px;
		background: transparent;
		pointer-events: none;
	}

	&.dark {
		background: #2b2b2b;

		.footer-nav__item {
			path {
				fill: $white;
			}
		}

		@include up($md) {
			background: transparent;

			.footer-nav {
				background: #2b2b2b;
			}
		}
	}
}
</style>