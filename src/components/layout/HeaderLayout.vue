<template>
	<header class="header" :class="{'dark': appDarkTheme}">
		<b-container class="header-inner" :class="{ 'header-inner--hidden': !isHeaderShowing }">
			<b-row>
				<b-col cols="12" md="5" order-md="1" class="d-flex align-items-center">
					<div class="header-search">
						<svgicon name="search" width="14px" height="14px" />
						<b-form-input v-model.trim="inputSearch" type="text" placeholder="Search" />

						<transition name="header-search-dropdown">
							<div class="header-search-dropdown" v-if="inputSearch && isHeaderShowing">
								<a
									v-for="item in searchList"
									:key="item.name"
									v-if="itemVisible(item)"
									class="header-search-dropdown__item"
									href="#!"
								>
									<div
										class="img-preview"
										:style="`background-image: url(${require('../../assets/img/' + item.img)})`"
										alt="card-preview"
									/>
									<span>{{ item.author }}</span>
								</a>
							</div>
						</transition>
					</div>
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
		inputSearch: "",
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
	computed: {
		searchList() {
			return this.$store.state.cards;
		},

		appDarkTheme: {
			get: function() {
				return this.$store.state.appDarkTheme;
			},
			set: function(newValue) {
				this.$store.state.appDarkTheme = newValue;
			}
		}
	},
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
		itemVisible(item) {
			let currentName = item.author.toLowerCase();
			let currentInput = this.inputSearch.toLowerCase();
			return currentName.includes(currentInput);
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

		path {
			transition: $transition-md ease;
		}
	}

	&-search {
		margin-right: 10px;
		position: relative;
		width: 100%;

		svg {
			position: absolute;
			top: 50%;
			left: 12px;
			transform: translateY(-50%);
		}

		&-dropdown {
			position: absolute;
			background: $white;
			top: calc(100% + 10px);
			left: 0;
			width: 100%;
			border-radius: $border-radius-md;
			max-height: 250px;
			overflow: auto;
			z-index: 2;
			box-shadow: $card-shadow;

			&__item {
				padding: 10px 15px;
				display: flex;
				align-items: center;
				transition: background $transition ease;

				.img-preview {
					width: 30px;
					margin-right: 15px;
					background-size: cover;
					border-radius: $border-radius;

					&::before {
						display: block;
						content: "";
						width: 100%;
						padding-top: 100%;
					}
				}

				&:hover {
					background: #d1d1d1;
					text-decoration: none;
					color: $black;
				}
			}

			@include up($md) {
				border-radius: $border-radius-lg;
			}
		}

		@include up($md) {
			margin-right: 30px;
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

			&:last-of-type {
				margin-right: 10px;
			}

			@include up($md) {
				margin: 0 9px;

				&:last-of-type {
					margin-right: 9px;
				}
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
		transition: $transition-md ease;

		&.header-inner--hidden {
			transform: translateY(-92px);
		}

		@include up($md) {
			padding-top: 26px;
			padding-bottom: 26px;
		}
	}

	&.dark {
		.header-logo {
			path {
				fill: $white;
			}
		}

		.header-search {
			.form-control {
				background: #363636;
				color: #979797;

				&::placeholder {
					color: #979797;
				}
			}

			path {
				fill: #979797;
			}

			&-dropdown {
				background: #363636;
			}
		}

		.btn-outline-primary {
			border: solid 1px #363636;
			background: #1b1b1b;
		}

		.header-inner {
			background: #222222e6;
		}
	}
}
</style>