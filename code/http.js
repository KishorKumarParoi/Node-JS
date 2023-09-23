import http from 'http';
import url from 'url';

const server = http.createServer((req, res) => {
    // console.log(req.url);
    const q = url.parse(req.url, true);
    console.log(q);

    if (req.url === '/') {
        res.write('Hello World!');
        res.end();
    } else if (req.url === '/about-me') {
        res.write('My name is Kishor Paroi.');
        res.write("I'm a software engineer.");
        res.write('I like to code.');
        res.end();
    } else {
        res.write('Not Found');
        res.end();
    }
});

server.listen(1000);

console.log('Listening on port 1000...');
