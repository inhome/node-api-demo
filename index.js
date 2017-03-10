"use strict";

function jsonResponse(status, body) {
  return { status: status, headers: { "Content-Type": "application/json; charset=utf-8" }, body: JSON.stringify(body) };
}

module.exports = { jsonResponse: jsonResponse };
