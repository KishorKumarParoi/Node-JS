// eslint-disable-next-line import/no-extraneous-dependencies
import * as http from 'http';

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(` <form action="uploadFile" method="post" id="uploadFile" enctype="multipart/form-data">
        <input type="file" name="uploadFile" id="uploadFile">
        <input type="submit" value="submit">
    </form>`);
    res.write('</form>');
    return res.end();
}).listen(8080);
