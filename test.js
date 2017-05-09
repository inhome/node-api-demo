"use strict";
var assert = require("assert");
var lib = require("./index");

assert.strictEqual(lib.jsonResponse(200, { ok: true }).body, '{"ok":true}');
assert.strictEqual(lib.jsonResponse(404, {}).status, 404);

assert.strictEqual(lib.readPage(undefined), 1);
assert.strictEqual(lib.readPage("12"), 12);
["0", "2x", "", "9007199254740992"].forEach(function (value) { assert.throws(function () { lib.readPage(value); }, RangeError); });

