#!/usr/bin/env node

const cli = require("../src/main.js");
const parse = require("../src/lib/parse.js");

const args = parse(process.argv.slice(2));
try {
	cli(args)
} catch (err) {
	console.warn(err);
}
