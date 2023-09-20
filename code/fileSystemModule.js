import * as fs from 'fs';
import * as http from 'http';
import * as module from 'module';

console.log(http);
console.log(fs);
console.log(http.STATUS_CODES);
console.log(module);

// http.createServer((req, res) => {
//     fs.readFile('./demo.html', (err, data) => {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         res.end();
//     });
// }).listen(8080);

http.createServer((req, res) => {
    fs.appendFile('demo1.txt', 'Hello content!', (err) => {
        if (err) throw err;
        console.log('Saved Hello World!');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Saved!');
        res.end();
    });

    // fs.readFile('./demo.html', (err, data) => {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(data);
    //     res.end();
    // });
}).listen(8080);
