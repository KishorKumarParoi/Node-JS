import * as fs from 'fs';
import * as http from 'http';
import * as module from 'module';

console.log(http);
console.log(fs);
console.log(http.STATUS_CODES);
console.log(module);

http.createServer((req, res) => {
    fs.readFile('./demo.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(8080);
