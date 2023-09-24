import fs from 'fs';
import http from 'http';

http.createServer((req, res) => {
    const readStream = fs.createReadStream('./demo.html', 'utf8');
    const writeStream = fs.createWriteStream('./write.html');
    readStream.pipe(res);
    readStream.pipe(writeStream);
}).listen(3000);
