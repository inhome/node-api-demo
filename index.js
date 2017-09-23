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

function route(method, path) {
  if (method === "GET" && path === "/health") return jsonResponse(200, { ok: true });
  if (path === "/health") return jsonResponse(405, { error: "method_not_allowed" });
  return jsonResponse(404, { error: "not_found" });
}

function pickFields(body, allowed) {
  var result = Object.create(null);
  allowed.forEach(function (key) {
    if (Object.prototype.hasOwnProperty.call(body, key)) result[key] = body[key];
  });
  return result;
}

module.exports = { jsonResponse: jsonResponse, readPage: readPage, route: route, pickFields: pickFields };
