import fs from 'fs';

const myReadStream = fs.createReadStream('./demo.html');
const myWriteStream = fs.createWriteStream('./write.html');

myReadStream.on('data', (chunk) => {
    console.log('New chunk received');
    myWriteStream.write(chunk);
});

myReadStream.on('end', () => {
    console.log('Stream ended');
    // console.log(myWriteStream);
});
