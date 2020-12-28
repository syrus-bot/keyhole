const assert = require("assert");
const constants = require("../src/lib/constants.js");

describe("constants", function () {
	it("should be an object", () => {
		assert.strictEqual(typeof constants, "object");
	});

	it("should have all keys", () => {
		const keys = ["HELP"];
		assert.deepStrictEqual(Object.keys(constants), keys);
	});
});
