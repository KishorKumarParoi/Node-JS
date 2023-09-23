import fs from 'fs';

// console.log(fs);

const ourReadStream = fs.createReadStream('./demo.html');
console.log(ourReadStream);

ourReadStream.on('data', (chunk) => {
    console.log(chunk.toString());
});
