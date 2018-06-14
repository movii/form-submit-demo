const http = require('http');
const formidable = require('formidable');
const util = require('util');
const path = require('path');
const fs = require('fs');

var server = http.createServer(function(req, res) {
  switch (req.url) {
    case '/':
      displayForm(req, res);
      break;
    case '/submit':
      submitForm(req, res);
      break;
    default:
      show404(req, res);
      break;
  }
}).listen(1333, (req) => console.log('You server is now running at port 1333'));

var displayForm = (req, res) => {
  var form = [
    '<!DOCTYPE>',
    '<head>',
    '<meta charset="utf-8">',
    '</head>',
    '<body>',
    '<form action="/submit" method="post" enctype="application/x-www-form-urlencoded">',
    '<p><input type="text" name="text1" value="text default">',
    '<p><input type="text" name="text2" value="a&#x03C9;b">',
    '<p><input type="file" name="file1">',
    '<p><input type="file" name="file2">',
    '<p><input type="file" name="file3">',
    '<p><button type="submit">Submit</button>',
    '</form>',
    '</body>',
    '</html>'
  ].join('');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(form);
}

var submitForm = (req, res) => {};

var show404 = (req, res) => {
  res.writeHead(404, { 'Content-Type': 'text/plain' })
  res.end('CODE 404. Something is wrong.')
};