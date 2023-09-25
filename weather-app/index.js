/*
 * Title : Weather App
 * Description : A simple weather app that shows the current weather of a city
 * Author : Kishor Paroi
 * Date : 2023/09/25
 * Time : 10:40:13
 */

// Dependencies
import fs from 'fs';
import http from 'http';

// App object
const app = {};
const port = 3000;

// Create server
app.server = http
    .createServer((req, res) => {
        const data = fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
        data.then((response) => response.json()).then((output) => console.log(output));
        const ourReadStream = fs.createReadStream('./lib/fetch/fetch.txt', 'utf-8');
        ourReadStream.pipe(res);
    })
    .listen(port);
