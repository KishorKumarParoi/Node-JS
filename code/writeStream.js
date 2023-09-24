import fs from 'fs';

const myReadStream = fs.createReadStream('./demo.html');
const myWriteStream = fs.createWriteStream('./write.html');

myReadStream.pipe(myWriteStream);
