# tiny-api

Pure response helpers for a small JSON service.

Run `node test.js` from this folder.

## jsonResponse

Return a response description without opening sockets. JSON serialization errors propagate to the caller.

## readPage

Accept positive safe integers. Missing input defaults to page one; malformed input is an error.

## route

A minimal route experiment. The caller is responsible for parsing URLs, adapting headers, and writing the response.
