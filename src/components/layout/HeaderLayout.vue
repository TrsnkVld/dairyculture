<template>
	<header class="header">
		<b-container class="header-inner" :class="{ 'header-inner--hidden': !isHeaderShowing }">
			<b-row>
				<b-col cols="12" md="5" order-md="1" class="d-flex align-items-center">
					<b-input-group class="header-search">
						<b-input-group-prepend>
							<svgicon name="search" width="14px" height="14px" />
						</b-input-group-prepend>
						<b-form-input type="search" placeholder="Search" />
					</b-input-group>
					<svgicon name="settings" class="header-filters" @click="onFilterClick" />
				</b-col>
				<b-col cols="12" md="7" order-md="0" class="d-flex align-items-center">
					<b-link :to="{name: 'home'}" class="d-none d-lg-block">
						<svgicon name="logo" class="header-logo" />
					</b-link>

					<div class="overflow-wrap">
						<nav class="header-nav">
							<ul class="nav">
								<li v-for="(item, index) in links" :key="index" class="nav-item">
									<b-link
										:to="{name: item.url}"
										class="header-nav__item btn btn-outline-primary"
									>{{ item.name }}</b-link>
								</li>
							</ul>
						</nav>
					</div>
				</b-col>
			</b-row>
		</b-container>
		<transition name="filters-aside">
			<FilterAside v-if="isFiltersShowing" @onClose="onFilterClick" />
		</transition>
	</header>
</template>

<script>
import FilterAside from "@/components/elements/FilterAside";

export default {
	name: "HeaderLayout",
	components: {
		FilterAside,
	},
	data: () => ({
		isHeaderShowing: true,
		lastScrollPosition: 0,
		isFiltersShowing: false,
		value: [250000, 800000],
		links: [
			{
				name: "Top",
				url: "top",
			},
			{
				name: "Painters",
				url: "painters",
			},
			{
				name: "Design",
				url: "design",
			},
			{
				name: "Tags",
				url: "tags",
			},
		],
	}),
	methods: {
		onFilterClick() {
			this.isFiltersShowing = !this.isFiltersShowing;
		},
		onScroll() {
			const currentScrollPosition =
				window.pageYOffset || document.documentElement.scrollTop;
			if (currentScrollPosition < 0) {
				return;
			}
			if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
				return;
			}
			this.isHeaderShowing = currentScrollPosition < this.lastScrollPosition;
			this.lastScrollPosition = currentScrollPosition;
		},
	},
	mounted() {
		window.addEventListener("scroll", this.onScroll);
	},
	beforeDestroy() {
		window.removeEventListener("scroll", this.onScroll);
	},
};
</script>

<style lang="scss">
.header {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
	width: 100%;

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
		ul {
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

	.header-inner {
		background: #dbdbdbe6;
		padding-top: 10px;
		padding-bottom: 10px;
		transition: transform $transition-md ease;

		&.header-inner--hidden {
			transform: translateY(-92px);
		}

		@include up($md) {
			padding-top: 26px;
			padding-bottom: 26px;
		}
	}
}
</style>