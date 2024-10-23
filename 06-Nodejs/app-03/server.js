import http from "http";
const PORT = 8000;
const server = http.createServer((req, res) => {
    // res.writeHead(200, {'Content-Type': 'text/HTML'});
    // res.statusCode = 404;
    res.writeHead(500 , {'Content-Type': 'application/JSON'})
  // res.write("hello world");
  res.write(json.stringify({"Message " : "Server Error"}));
});

server.listen(PORT, () => {
  console.log(`server is running: ${PORT}`);
});
