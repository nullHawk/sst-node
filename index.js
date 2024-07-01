const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>Node js class</title></head><body><h1>Hello World!</body></html>"); 
    res.end();
});