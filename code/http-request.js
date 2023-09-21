// ? Create a Node.js file that opens the requested file and returns
// ? the content to the client.If anything goes wrong, throw a 404 error:

import fs from 'fs';
import http from 'http';
import url from 'url';

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = `.${q.pathname}`;
    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end('404 Not Found');
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);
