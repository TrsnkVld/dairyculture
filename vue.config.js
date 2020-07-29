const webpack = require('webpack');
const path = require('path');

module.exports = {
	productionSourceMap: false,
	filenameHashing: false,

	// глобальные css переменные
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/scss/_variables.scss";`
			}
		}
	},
};

