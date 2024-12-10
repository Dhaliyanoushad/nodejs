const http = require("http");

const server = http.createServer((req, res) => {
  // localhost:3000
  if (req.url === "/") {
    res.write("hello world");
    res.end();
  }
  // localhost:3000/api/courses
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3, 4]));
    res.end();
  }
});

// server.on("connection", (socket) => {
//   console.log("new connection");
// });

server.listen(3000);

console.log("Listening on port 3000");
