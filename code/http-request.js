// ? Create a Node.js file that opens the requested file and returns
// ? the content to the client.If anything goes wrong, throw a 404 error:

import fs from 'fs';
import http from 'http';
import url from 'url';

const address = 'http://localhost:8080/';

http.createServer((req, res) => {
    const q = url.parse(address.url, true);
    const fileName = `.${q.pathname}`;

    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end('404 Not Found');
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);
