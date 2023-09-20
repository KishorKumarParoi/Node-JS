/* eslint-disable import/extensions */
import http from 'http';
import { arr } from './myFirstModule.js';

console.log(arr);

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`Arr : ${arr} <br>
    URL : ${req.url}`);
}).listen(8080);
