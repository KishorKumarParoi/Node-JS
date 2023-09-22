import fs from 'fs';
import http from 'http';
// eslint-disable-next-line import/no-extraneous-dependencies
import uc from 'upper-case';

http.createServer((req, res) => {
    fs.appendFile('demo3.html', 'Hello content!', (err) => {
        if (err) throw err;
        console.log('Saved!');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`Saved! ${uc.upperCase('Hello content!')}`);
        return res.end();
    });
}).listen(8080);
