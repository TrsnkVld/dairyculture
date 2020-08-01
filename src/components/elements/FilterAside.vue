<template>
	<aside class="filters-aside d-flex flex-column" :class="{'dark': appDarkTheme}">
		<div class="filters-aside__content">
			<h2>
				Filter
				<svgicon @click="$emit('onClose')" name="close" class="filters-close" />
			</h2>

			<FilterGroup v-for="(item, index) in filters" :item="item" :key="index" />
		</div>
		<b-button
			@click="appDarkTheme = !appDarkTheme; changeTheme(appDarkTheme)"
			class="change-theme"
		>Смените цветовую палитру сайта</b-button>
		<b-button class="filters-aside__btn">Apply</b-button>
	</aside>
</template>

<script>
import FilterGroup from "@/components/elements/FilterGroup";

export default {
	name: "FilterAside",
	components: {
		FilterGroup,
	},
	data: () => ({
		filters: [
			{
				title: "Price ( $ )",
				items: [
					"0-200",
					"200-400",
					"400-600",
					{ name: "More", range: [0, 1000000] },
				],
			},
			{
				title: "Shape",
				items: ["Circle", "Square", "Rectangle", "Triangle"],
			},
			{
				title: "Size ( Width / Height)",
				items: [
					"0-200",
					"200-400",
					"400-600",
					{ name: "More", range: [0, 1000000] },
				],
			},
			{
				items: [
					"0-200",
					"200-400",
					"400-600",
					{ name: "More", range: [0, 1000000] },
				],
			},
		],
	}),
	methods: {
		changeTheme(bool) {
			document.cookie = `isAppThemeDark=${bool}`;
		}
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
};
</script>

<style lang="scss">
.filters-aside {
	position: absolute;
	top: 0;
	right: 0;
	z-index: 1;
	height: 100vh;
	background: #d1d1d1;
	color: #717171;

	&__content {
		padding: 30px;
		overflow: auto;

		h2 {
			color: inherit;
			display: flex;
			justify-content: space-between;
		}
	}

	&__btn {
		background: #dbdbdb;
		border-radius: 0;
		border: none;
		font-size: 20px;
		font-weight: normal;
		padding: 18px;
		margin-top: auto;
	}

	&.dark {
		background: #1b1b1b;
		color: #979797;

		.filters-aside__btn {
			background: #171717;
			color: #d1d1d1;
		}
	}

	.change-theme {
		background: grey;
		display: block;
		margin: 0 auto;
	}
}

.filters-close {
	width: 15px;
	height: 15px;
	cursor: pointer;
}
</style>