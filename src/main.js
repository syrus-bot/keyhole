const CONSTANTS = require("./lib/constants.js");
const { opendir } = require("fs");

module.exports = (args) => {
	if (args.MODES.HELP || args.PATHS.length < 2) {
		console.log(CONSTANTS.HELP);
	}
};
