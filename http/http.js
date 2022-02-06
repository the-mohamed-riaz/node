const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello world');
        res.end();
    }
    if (req.url === 'about') {
        res.end('About page');
    }

    console.log("browser is requesting for ", req.url);
    res.end(`<h1>Oppss</h1><p>Cannot find the page you were looking for</p><button><a href="/">Go back</a></button>`)

})

server.listen(3001);
console.log("server starting at port 3001");