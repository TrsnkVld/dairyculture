<template>
	<header class="header">
		<b-container>
			<b-row>
				<b-col cols="12" md="5" order-md="1" class="d-flex align-items-center">
					<b-input-group class="header-search">
						<b-input-group-prepend>
							<svgicon name="search" width="14px" height="14px" />
						</b-input-group-prepend>
						<b-form-input type="search" placeholder="Search" />
					</b-input-group>
					<svgicon name="settings" class="header-filters" @click="isFiltersShowing = !isFiltersShowing" />
				</b-col>
				<b-col cols="12" md="7" order-md="0" class="d-flex align-items-center">
					<b-link :to="{name: 'Home'}" class="d-none d-lg-block">
						<svgicon name="logo" class="header-logo" />
					</b-link>

					<div class="overflow-wrap">
						<b-nav class="header-nav">
							<b-nav-item
								class="header-nav__item"
								:to="{name: 'Home'}"
								v-for="(item, index) in links"
								:key="index"
							>
								<b-button variant="outline-primary">{{ item.name }}</b-button>
							</b-nav-item>
						</b-nav>
					</div>
				</b-col>
			</b-row>
		</b-container>
		<transition name="filters-aside">
			<FilterAside v-if="isFiltersShowing" @onClose="isFiltersShowing = !isFiltersShowing" />
		</transition>
	</header>
</template>

<script>
import FilterAside from "@/components/elements/FilterAside";

export default {
	name: "HeaderLayout",
	components: {
		FilterAside
	},
	data: () => ({
		isFiltersShowing: false,
		value: [250000, 800000],
		links: [
			{
				name: "Top",
				url: "#1",
			},
			{
				name: "Painters",
				url: "",
			},
			{
				name: "Design",
				url: "",
			},
			{
				name: "Tags",
				url: "",
			},
		],
	}),
};
</script>

<style lang="scss">
.header {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
	width: 100%;
	padding: 10px 0;
	background: #dbdbdbe6;

	&-logo {
		width: 97px;
		height: 17px;
		margin-right: 41px;
		flex-shrink: 0;
	}

	&-search {
		padding-right: 10px;

		@include up($md) {
			padding-right: 30px;
		}
	}

	&-filters {
		cursor: pointer;
		width: 30px;
		height: 30px;
		flex-shrink: 0;

		@include up($md) {
			width: 40px;
			height: 40px;
		}
	}

	&-nav {
		&__item {
			display: block;
			margin: 0 5px;

			a {
				padding: 0;
				color: $black;
			}

			@include up($md) {
				margin: 0 9px;
			}
		}

		@include adopt($lg) {
			overflow: auto !important;
			flex-flow: row !important;
		}

		@include adopt($md) {
			padding: 0 5px 50px !important;
		}

		@include up($md) {
			padding: 0;
			margin: 0 -9px;
		}
	}

	.overflow-wrap {
		height: 30px;
		overflow: hidden;
		margin: 10px -10px 0;

		@include up($md) {
			height: auto;
			margin: 0;
		}
	}

	@include up($md) {
		padding: 26px 0;
	}
}
</style>