const { accessSync, constants } = require("fs");

module.exports = function parse(args) {
	const PATHS = [];
	const MODES = {
		RECURSIVE: false,
		ORPHANED: false,
		HELP: false
	};
	if (args.includes("-h") || args.includes("--help")) {
		MODES.HELP = true;
		return {PATHS: PATHS, MODES: MODES};
	}
	for (const arg of args) {
		if (["-r", "--recursive"].includes(arg)) {
			MODES.RECURSIVE = true;
		} else if (["-u", "--untranslated"].includes(arg)) {
			MODES.ORPHANED = true;
		} else {
			try {
				accessSync(arg, constants.F_OK || constants.R_OK);
				PATHS.push(arg);
			} catch (error) {
				console.log(error.message);
			}
		}
	}
	return {PATHS: PATHS, MODES: MODES};
};
