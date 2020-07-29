<template>
	<header class="header">
		<b-container>
			<b-row>
				<b-col cols="12" md="5" order-md="1" class="d-flex align-items-center">
					<b-input-group class="header__search">
						<b-input-group-prepend>
							<svgicon name="search" width="14px" height="14px" />
						</b-input-group-prepend>
						<b-form-input type="search" placeholder="Search" />
					</b-input-group>
					<svgicon name="settings" class="header__filters" />
				</b-col>
				<b-col cols="12" md="7" order-md="0" class="d-flex align-items-center">
					<b-link :to="{name: Home}">
						<svgicon name="logo" class="header__logo" />
					</b-link>

					<b-nav class="header__nav">
						<b-nav-item class="header__nav-item" href="#1" v-for="(item, index) in links" :key="index">
							<b-button variant="outline-primary">{{ item.name }}</b-button>
						</b-nav-item>
					</b-nav>
				</b-col>
			</b-row>
		</b-container>
	</header>
</template>

<script>
export default {
	name: "HeaderLayout",
	data: () => ({
		links: [
			{
				name: "Top",
				url: "#1"
			},
			{
				name: "Painters",
				url: ""
			},
			{
				name: "Design",
				url: ""
			},
			{
				name: "Tags",
				url: ""
			},
		]
	}),
};
</script>

<style lang="scss">
.header {
	position: fixed;
	width: 100%;
	padding: 10px 0;

	&__logo {
		width: 97px;
		height: 17px;
		margin-right: 41px;
		flex-shrink: 0;
	}

	&__search {
		padding-right: 30px;
	}

	&__filters {
		cursor: pointer;
		width: 30px;
		height: 30px;
		flex-shrink: 0;

		@include up($md) {
			width: 40px;
			height: 40px;
		}
	}

	&__nav {
		margin: 0 -9px;
		&-item {
			display: block;
			margin: 0 9px;

			a {
				padding: 0;
				color: $black;
			}
		}
	}

	@include up($md) {
		padding: 26px 0;
	}
}
</style>