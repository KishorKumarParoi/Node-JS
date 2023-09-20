import * as url from 'url';

const address = 'https://www.google.com/search?q=javascript?&year=2017&month=february';
console.log(url);
console.log(address);

const parsedUrl = url.parse(address, true);
console.log(parsedUrl);
console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.query);
console.log(parsedUrl.query.year);
console.log(parsedUrl.query.month);
console.log(parsedUrl.protocol);
console.log(parsedUrl.port);
console.log(parsedUrl.hash);
console.log(parsedUrl.auth);
console.log(parsedUrl.href);
console.log(parsedUrl.slashes);
console.log(parsedUrl.hostname);
console.log(parsedUrl.href);
