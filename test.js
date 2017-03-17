"use strict";
var assert = require("assert");
var lib = require("./index");

assert.strictEqual(lib.jsonResponse(200, { ok: true }).body, '{"ok":true}');
assert.strictEqual(lib.jsonResponse(404, {}).status, 404);

