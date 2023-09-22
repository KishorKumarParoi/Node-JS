import formidable, { IncomingForm } from 'formidable';
import { createServer } from 'http';

console.log('formidable', IncomingForm);
console.log(formidable);

createServer((req, res) => {
    if (req.url === '/fileupload') {
        const form = new IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) throw err;
            console.log('files', fields, files);
            res.write('File uploaded');
            return res.end();
        });
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
}).listen(8080);
