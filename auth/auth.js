import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
})
export class AppModule {};
var qs = require("querystring");
var http = require("https");
const fs = require('fs');

// const express = require('express');
// const app = express();

var options = {
  "method": "POST",
  "hostname": "https://localhost",
  "port": 473,
  "path": "/oauth2/access_token",
  "headers": {
    "content-type": "application/x-www-form-urlencoded"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

var	data = [];
fs.readFile('./auth/.credentials', (err, data) => {
	if (err) throw err;

	console.log(data.toString());
}),

req.write(qs.stringify({

	code: data[0], //'AUTH_CODE'
	client_id: 'CLIENT_ID',
	client_secret: data[1], //'CLIENT_SECRET'
	grant_type: 'authorization_code'
}));

req.end();

// app.listen(473);
// opn('http://localhost:' + 473);