<template>
	<div id="app">
		<HeaderLayout />
		<router-view />
		<footer>footer</footer>
	</div>
</template>

<script>
import HeaderLayout from "@/components/layout/HeaderLayout";

export default {
	components: {
		HeaderLayout,
	}
}
</script>

<style lang="scss">
</style>
