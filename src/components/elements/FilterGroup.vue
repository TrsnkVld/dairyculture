<template>
	<div class="filter-group" :class="{'dark': appDarkTheme}">
		<p class="filter-group__title" v-if="item.title">{{ item.title }}</p>
		<div class="filter-group__item">
			<template v-for="(btn, i) in item.items">
				<b-button
					:key="i"
					variant="outline-primary"
					:class="{'btn-active': i === activeBtn}"
					@click="(btn.name) ? showRange() : null; setActiveBtn(i)"
				>{{ (btn.name) ? btn.name : btn }}</b-button>
				<transition name="range" :key="`anim-${i}`">
					<div class="range" v-if="btn.range && isRangeShowing && i === activeBtn">
						<p class="range-title" :key="`text-${i}`">${{ btn.range[0] | nf }} - ${{ btn.range[1] | nf }}</p>
						<vue-slider
							class="range-stripe"
							:key="`slider-${i}`"
							v-model="btn.range"
							:contained="true"
							:min="0"
							:max="1000000"
						/>
					</div>
				</transition>
			</template>
		</div>
	</div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export default {
	name: "FilterGroup",
	components: {
		VueSlider,
	},
	props: {
		item: {
			type: Object,
			default: () => [],
		},
	},
	data: () => ({
		activeBtn: null,
		isRangeShowing: false,
	}),
	computed: {
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
		showRange() {
			this.isRangeShowing = !this.isRangeShowing;
		},

		setActiveBtn(btnIndex) {
			this.activeBtn = btnIndex;
		}
	},
};
</script>

<style lang="scss">
.filter-group {
	margin-top: 11px;
	color: #717171;

	&__title {
		color: inherit;
		padding-top: 24px;
		padding-bottom: 20px;
		margin-bottom: 0;
	}

	&__item {
		.btn {
			margin-right: 9px;
			margin-bottom: 9px;

			&:last-of-type {
				margin-right: 0;
			}
		}
	}

	.range {
		overflow: hidden;

		&-title {
			margin-top: 20px;
			margin-bottom: 0;
			color: #717171;
			font-size: 14px;
			text-align: center;
            transition: opacity 0.4s ease;
		}

		&-stripe {
            transition: opacity 0.4s ease;
		}
	}

	&:first-of-type {
		margin-top: 0;
	}

	&.dark {
		color: #979797;

		.filter-group__item {
			color: $white;
		}
	}
}
</style>