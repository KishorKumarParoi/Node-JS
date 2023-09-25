/*
 * Title : Weather App
 * Description : A simple weather app that shows the current weather of a city
 * Author : Kishor Paroi
 * Date : 2023/09/25
 * Time : 10:40:13
 */

// Dependencies
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import http from 'http';
import url from 'url';

// App object
const app = {};
const port = 3000;
const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: { q: '53.1,-0.13' },
    headers: {
        'X-RapidAPI-Key': '748e18fa19msh0b68230c87862acp1a8fcejsnc3af3f5f0a4c',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
};

// Fetching Weather Data Function
const fetchWeather = async (city, callback) => {
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }

    http.get(url, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });

        response.end('end', () => {
            const weatherData = JSON.parse(data);
            callback(weatherData);
        });
    });
};

// Create server
app.server = http
    .createServer((req, res) => {
        if (req.url === '/weather') {
            fetchWeather('London', (weatherData) => {
                res.end(JSON.stringify(weatherData));
            });
        } else {
            res.end('Welcome to weather app');
        }
    })
    .listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
