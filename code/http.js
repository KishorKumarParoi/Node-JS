import http from 'http';

console.log(http);

const server = http.createServer();
server.on('connection', () => {
    console.log('New connection...');
});
server.listen(1000);

console.log('Listening on port 1000...');
