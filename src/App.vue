<template>
	<div id="app">
		<HeaderLayout />
		<router-view />
		<FooterLayout />
	</div>
</template>

<script>
import HeaderLayout from "@/components/layout/HeaderLayout";
import FooterLayout from "@/components/layout/FooterLayout";

export default {
	components: {
		HeaderLayout,
		FooterLayout
	}
}
</script>

<style lang="scss">
</style>
