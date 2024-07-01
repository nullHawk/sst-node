const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/login' && req.method === 'GET') {
        res.setHeader("Content-Type", "text/html");
        res.write("<html><head><title>Node js class</title></head><body><h1>Logged In</body></html>"); 
        res.end();
      } else {
        res.setHeader("Content-Type", "text/html");
        res.write("<html><head><title>Node js class</title></head><body><h1>Hello World!</body></html>"); 
        res.end();
      }
});

const port = 8000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});