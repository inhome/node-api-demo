"use strict";

function jsonResponse(status, body) {
  return { status: status, headers: { "Content-Type": "application/json; charset=utf-8" }, body: JSON.stringify(body) };
}

function readPage(raw) {
  if (raw === undefined) return 1;
  if (!/^[1-9][0-9]*$/.test(String(raw))) throw new RangeError("Invalid page");
  var page = Number(raw);
  if (!Number.isSafeInteger(page)) throw new RangeError("Invalid page");
  return page;
}

module.exports = { jsonResponse: jsonResponse, readPage: readPage };
