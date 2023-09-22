/* eslint-disable import/no-extraneous-dependencies */
import { createServer } from 'http';

createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.write(upperCase('Hello World!'));
    res.write('Hello World!'.toUpperCase());
    res.end();
}).listen(8080);
