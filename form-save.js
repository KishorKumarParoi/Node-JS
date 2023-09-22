import { IncomingForm } from 'formidable';
import { rename } from 'fs';
import { createServer } from 'http';

createServer((req, res) => {
    if (req.url === '/fileupload') {
        const form = new IncomingForm();
        form.parse(req, (err, fields, files) => {
            const oldpath = files.filetoupload.filepath;
            const newpath = `C:/Users/Your Name/${files.filetoupload.originalFilename}`;
            rename(oldpath, newpath, (error) => {
                if (error) throw error;
                res.write('File uploaded and moved!');
                return res.end();
            });
        });
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
}).listen(8080);
