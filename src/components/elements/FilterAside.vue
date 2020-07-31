<template>
	<aside class="filters-aside d-flex flex-column">
		<div class="filters-aside__content">
			<h2>
				Filter
				<svgicon @click="$emit('onClose')" name="close" class="filters-close" />
			</h2>

			<FilterGroup v-for="(item, index) in filters" :item="item" :key="index" />
		</div>
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

	&__content {
		padding: 30px;
		overflow: auto;

		h2 {
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
}

.filters-close {
	width: 15px;
	height: 15px;
	cursor: pointer;
}
</style>