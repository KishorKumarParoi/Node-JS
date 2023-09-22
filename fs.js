import * as fs from 'fs';

console.log(fs);

fs.readFile('demo.html', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
    console.log(JSON.stringify(data.toString()));
    console.log(JSON.stringify(data.toString()).replace(/\\n/g, ''));
    console.log('File read');
});

console.log('Hello Kishor');
