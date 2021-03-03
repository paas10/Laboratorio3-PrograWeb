const http = require('http')
const port = 3000

http.createServer((req, res) => {
  let splits = req.url.split('/');
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end(`{"hello":"${splits[2]}"}`)
}).listen(port)

console.log(`Server is running on http://localhost:${port}`);