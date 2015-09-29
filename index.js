#!/usr/bin/env node
var concat = require('concat-stream'),
  soap = require('soap'),
  fs = require('fs');

if (process.argv.length < 4) {
  console.log('Usage: soapcli <url> <func> [json-args-file]');
  process.exit(1);
}

var url = process.argv[2],
  func = process.argv[3],
  file = process.argv[4];

var stream = null;

if (file === undefined || file === '--') {
  stream = process.stdin;
} else {
  stream = fs.createReadStream(file);
}

stream.on('error', error)
  .pipe(concat(parseArgs));

function parseArgs(json) {
  try {
    var args = JSON.parse(json);
  }
  catch (e) {
    error(e);
  }
  soap.createClient(url + '?wsdl', function(e, client) {
       if (e) {
         error(e);
       }
       client[func](args, handleResponse);
     });
}

function handleResponse(e, result) {
    if (e) {
      error(e);
    }
    console.log(result);
}

function error(e) {
  console.error(e);
  process.exit(1);
}
