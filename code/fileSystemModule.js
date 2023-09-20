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
    // fs.appendFile('demo1.txt', 'Hello World!', (err) => {
    //     if (err) throw err;
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write('Saved Hello World!');
    //     res.end();
    // });

    // fs.appendFile('./demo.html', '<h1>Hello World!</h1>', (err, data) => {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(data);
    //     res.end();
    // });

    // fs.open('./demo.html', 'w', (err, file) => {
    //     if (err) throw err;
    //     console.log('Saved!');
    //     console.log(file);
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write('opened!');
    //     res.end();
    // });

    fs.writeFile('./demo.html', '<h1>Hello World!</h1>', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });

    fs.readFile('./demo.html', (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`Read Loudly!${data}`);
        res.end();
    });

    fs.unlink('./demo1.txt', (err) => {
        if (err) throw err;
        console.log('File deleted!');
    });

    fs.rename('./demo2.html', './demo.html', (err) => {
        if (err) throw err;
        console.log('File Renamed!');
    });

    fs.appendFile('./demo.html', '<h1>I will get 100k dollar Job</h1>', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });

    fs.readFile('./demo.html', (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`Read Loudly!${data}`);
        res.end();
    });
}).listen(8080);
