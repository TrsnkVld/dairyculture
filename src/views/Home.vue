<template>
	<main class="home">
		<b-container>
			<b-row>
				<b-col cols="3" lg="qwe" v-for="(item, index) in cards" :key="index">
					<CardCube :item="item" />
				</b-col>
			</b-row>
		</b-container>
	</main>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
import CardCube from "@/components/CardCube";

export default {
	name: "Home",
	components: {
		HelloWorld,
		CardCube
	},
	data: () => ({
		cards: [
			{
				img: "art/1.png",
			},
			{
				img: "art/2.png",
			},
			{
				img: "art/3.png",
			},
			{
				img: "art/4.png",
			},
			{
				img: "art/5.png",
			},
			{
				img: "art/1.png",
			},
			{
				img: "art/2.png",
			},
			{
				img: "art/3.png",
			},
			{
				img: "art/4.png",
			},
			{
				img: "art/5.png",
			},
			{
				img: "art/1.png",
			},
			{
				img: "art/2.png",
			},
			{
				img: "art/3.png",
			},
			{
				img: "art/4.png",
			},
			{
				img: "art/5.png",
			},
			{
				img: "art/1.png",
			},
			{
				img: "art/2.png",
			},
			{
				img: "art/3.png",
			},
			{
				img: "art/4.png",
			},
			{
				img: "art/5.png",
			},
		]
	}),
	computed: {
	}
};
</script>

<style lang="scss">
@import "../scss/variables";
@import "../scss/mixins";

.col-3 {
	overflow: visible;

	&.col-lg-qwe {
		@include up($lg) {
			flex: 0 0 20%;
			max-width: 20%;
		}
	}
}
</style>
