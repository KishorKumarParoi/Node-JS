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
        let DataToBeShown;
        data.then((response) => response.json()).then((output) => {
            DataToBeShown = output;
            console.log(output);
            // console.log(DataToBeShown);
        });

        console.log(DataToBeShown);
        const ourReadStream = fs.createReadStream('./lib/fetch/fetch.txt', 'utf-8');
        // const outWriteStream = fs.createWriteStream('./lib/fetch/fetch.txt');
        ourReadStream.pipe(res);
        // ourReadStream.pipe(outWriteStream);
    })
    .listen(port);
