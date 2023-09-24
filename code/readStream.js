import fs from 'fs';

const myReadStream = fs.createReadStream('./demo.html');
// console.log(myReadStream);

const body = [];

myReadStream.on('data', (chunk) => {
    console.log('New chunk received');
    // console.log(chunk.toString());
    body.push(chunk);
});

myReadStream.on('end', () => {
    console.log('Stream ended');
    console.log(body);
    const parsedBody = Buffer.concat(body).toString();
    console.log(parsedBody);
});
