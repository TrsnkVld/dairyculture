<template>
	<footer class="footer">
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
				url: "Home",
			},
			{
				icon: "gallery",
				title: "Gallery",
				url: "Home",
			},
			{
				icon: "deals",
				title: "Deals",
				url: "Home",
			},
			{
				icon: "notify",
				title: "Notify",
				url: "Home",
			},
			{
				icon: "profile",
				title: "Profile",
				url: "Home",
			},
		],
	}),
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

	@include up($lg) {
	}
}
</style>