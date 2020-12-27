const assert = require("assert");
const parse = require("../src/lib/parse.js");

describe("argument parsing", function () {
	function generate(paths, recurse, orphan, help) {
		return {
			PATHS: paths,
			MODES: {
				RECURSIVE: recurse,
				ORPHANED: orphan,
				HELP: help
			}
		};
	}

	function test(string, results) {
		assert.deepStrictEqual(parse(string.split(" ")), results);
	}

	it("should detect help flag", () => {
		const mockResults = generate([], false, false, true);
		test("node main.js -h", mockResults);
		test("node main.js --help", mockResults);
		test("node main.js --help -R -U", mockResults);
	});

	it("should detect recursion flag", () => {
		const mockResults = generate([], true, false, false);
		test("node main.js -R", mockResults);
	});

	it("should detect orphaning flag", () => {
		const mockResults = generate([], false, true, false);
		test("node main.js -U", mockResults);
	});

	it("should detect paths", () => {
		const mockResults = generate(
			["LICENSE", "README"], false, false, false
		);
		test("node main.js LICENSE README", mockResults);
	});
});
