const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World from JEnkins App...Automatically trigger the pipeline whenever changes are pushed to the GitHub
repository.!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
