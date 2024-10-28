var http = require("http");
var url = require("url");
var dt = require("./createMofule");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    // res.write(req.url);
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
    // res.end(dt.nowdata());
  })
  .listen(8080);
