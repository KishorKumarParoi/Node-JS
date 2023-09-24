import fs from 'fs';
import http from 'http';

const ourReadStream = fs.createReadStream('./demo.html');

const arr = [];
ourReadStream.on('data', (chunk) => {
    arr.push(chunk.toString());
    // console.log(chunk.toString());
});

// console.log(arr);

http.createServer((req, res) => {
    console.log(req.url);
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url === '/') {
        res.write(`<form action="/process" method="POST">
            <input type="text" name="message" />
            <button type="submit">Submit</button>
        </form>
        `);
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            console.log('Stream ended');
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            res.write('Thanks for submitting!');
            res.end();
        });
    } else {
        res.write('Not Found!');
        res.end();
    }
}).listen(3000);
