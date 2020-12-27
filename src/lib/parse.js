const fs = require("fs");

module.exports = (args) => {
	const MODES = {
		RECURSIVE: false,
		ORPHANED: false,
		HELP: false
	};
	const PATHS = [];
	for (const arg of args.slice(2)) {
		if (MODES.HELP) {
			break;
		}
		switch (arg) {
			case "-h":
			case "--help":
				MODES.HELP = true;
				break;
			case "-R":
				MODES.RECURSIVE = true;
				break;
			case "-U":
				MODES.ORPHANED = true;
				break;
			default:
				if (fs.existsSync(arg)) {
					PATHS.push(arg);
				}
		}
	}
	return {PATHS: PATHS, MODES: MODES};
};
