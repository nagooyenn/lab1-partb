const http = require('http');
const fs = require('fs');

//server
const server = http.createServer((request, response) => {
    console.log(request.url);
    console.log(request.method);

    if (request.url === '/' || request.url === '/index.html') {
        fs.readFile('index.html', 'utf8', (e, d) => {
            if (e) {
                console.log('error');
                response.statusCode = 500;
                response.setHeader('Content-Type', 'text/plain');
                response.end('Internal Server Error');
            } else {
                response.setHeader('Content-Type', 'text/html');
                response.end(d);
            }
        });
    }
    else if (request.url === '/about') {
        fs.readFile('about.html', 'utf8', (e, d) => {
            if (e) {
                console.log('error');
                response.statusCode = 500;
                response.setHeader('Content-Type', 'text/plain');
                response.end('Internal Server Error');
            } else {
                response.setHeader('Content-Type', 'text/html');
                response.end(d);
            }
        });
    }
    else if (request.url === '/contact') {
        fs.readFile('contact.html', 'utf8', (e, d) => {
            if (e) {
                console.log('error');
                response.statusCode = 500;
                response.setHeader('Content-Type', 'text/plain');
                response.end('Internal Server Error');
            } else {
                response.setHeader('Content-Type', 'text/html');
                response.end(d);
            }
        });
    }
    else {
        response.statusCode = 404;
        response.setHeader("Content-Type", "text/html");
        response.end('<h1>404 - Page Not Found</h1>');
    }
});

server.listen(4000, () => console.log('server running on http://localhost:4000'));
