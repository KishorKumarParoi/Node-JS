import fs from 'fs';
import http from 'http';

http.createServer((req, res) => {
    const readStream = fs.createReadStream('./demo.html', 'utf8');
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <form action="/process" method="POST">
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
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            readStream.pipe(res);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('Not Found!');
        res.end();
    }
}).listen(3000);
