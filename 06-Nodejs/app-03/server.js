import http from "http";
const PORT = 8000;
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/HTML'});
  res.write("hello world");
});

server.listen(PORT, () => {
  console.log(`server is running: ${PORT}`);
});
