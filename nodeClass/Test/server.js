const http = require("http");
const url = require("url");
const fs = require("fs");
// console.log(url);

const server = http.createServer((req, res) => {
  let q = url.parse(req.url, true);
  console.log(q);
  let filename = "./public" + q.pathname;
  fs.readFile(filename, function (err, data) {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end("404 Not Found");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
  //   if (req.url === "/") {
  //     res.setHeader("Content-Type", "text/html");
  //     res.write("<h1>home page</h1>");
  //     res.end();
  //   } else if (req.url === "/about") {
  //     res.write("About page");
  //     res.end();
  //   }
  //   console.log(req.url);
  //   console.log(req.method);
});

server.listen("5000", () => {
  console.log("Server is listening to port 5000");
});
