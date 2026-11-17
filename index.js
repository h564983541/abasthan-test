const http = require('http');
const port = process.env.PORT || 8000;
const big = Buffer.alloc(1024 * 1024, 'a');
const server = http.createServer((req, res) => {
  if (req.url === '/big') {
    res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': big.length });
    res.end(big);
  } else {
    const body = JSON.stringify({ ok: true, service: 'abasthan-test', ts: new Date().toISOString() });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(body);
  }
});
server.listen(port, () => console.log('listening on ' + port));
