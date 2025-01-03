
const http = require("http");
const port = 5500;

const server = http.createServer((request, response) => {
    const contentResponse = `<html><body> Hola desde el servidor, ahora con variable port </body></html>`;
    
    const status = 200;
    const mimeType = {'Content-type' : 'text/html'};
    response.writeHead(status, mimeType);
    response.write(contentResponse);
    response.end();
});

server.listen(port);

console.log('servidor funcionando', port);