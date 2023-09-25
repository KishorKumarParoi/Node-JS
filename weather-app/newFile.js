import fs from 'fs';
import http from 'http';
import { app, port } from '.';

// Create server
app.server = http
    .createServer((req, res) => {
        const ourReadStream = fs.createReadStream('./lib/fetch/fetch.txt', 'utf8');
        const writeStream = fs.createWriteStream('./lib/fetch/write.txt', 'utf8');
        ourReadStream.pipe(res);
        ourReadStream.pipe(writeStream);
        const body = [];
        ourReadStream.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        ourReadStream.on('end', () => {
            console.log('finished');
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        });
    })
    .listen(port);
