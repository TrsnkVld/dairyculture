<template>
	<main>
		<b-container>
			<transition-group tag="b-row" name="card-cube">
				<b-col cols="3" lg="qwe" v-for="(item, index) in currentCards" :key="index">
					<CardCube :item="item" />
				</b-col>
			</transition-group>
		</b-container>
	</main>
</template>

<script>
import CardCube from "@/components/CardCube";

export default {
	name: "Painters",
	components: {
		CardCube,
	},
	data: () => ({
		currentCards: [],
		filteredCards: [],
		ind: 0,
		amountLoad: 20,
	}),
	computed: {
		currentLength() {
			return this.currentCards.length;
		},
		filteredLength() {
			return this.filteredCards.length;
		},
		cardsLeft() {
			if (this.currentLength + this.amountLoad - this.filteredLength < 0) {
				return this.ind + this.amountLoad;
			} else {
				return this.ind + (this.filteredLength - this.currentLength);
			}
		},
		thisRouteName() {
			return this.$route.name;
		}
	},
	methods: {
		scroll() {
			window.onscroll = () => {
				let bottomOfWindow =
					document.documentElement.scrollTop + window.innerHeight ===
					document.documentElement.offsetHeight;

				if (bottomOfWindow) {
					this.showCards(this.ind, this.cardsLeft);
				}
			};
		},

		showCards(a, b) {
			for (var i = a; i < b; i++) {
				this.currentCards.push(this.filteredCards[i]);
				this.ind = i;
			}
		},

		filterCards() {
			this.$store.state.cards.filter((el) => {
				if (el.theme === this.thisRouteName) this.filteredCards.push(el);
			});
		},
	},
	beforeMount() {
		this.filterCards();
		this.showCards(this.ind, 40);
	},
	mounted() {
		this.scroll();
	},
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
