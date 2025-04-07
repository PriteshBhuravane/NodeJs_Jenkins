const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World from JEnkins App...After a Pushed!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
