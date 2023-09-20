/* eslint-disable import/extensions */
import http from 'http';
import url from 'url';
import { arr } from './myFirstModule.js';

console.log(arr);

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const q = url.parse(req.url, true).query;
    res.write(`Arr : ${arr} <br>
    URL : ${req.url} <br>
    q.year : ${q.year} <br>
    `);
}).listen(8080);
