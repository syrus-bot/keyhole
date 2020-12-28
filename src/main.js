const CONSTANTS = require("./lib/constants.js");

module.exports = (args) => {
	if (args.MODES.HELP || args.PATHS.length < 2) {
		console.log(CONSTANTS.HELP);
	}
};
