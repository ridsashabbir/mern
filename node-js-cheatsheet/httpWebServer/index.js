const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url);
});

// first argument would be the port number and second argument would be the local host server
// port number should be the one that is unused at the moment, here we are using 8000
// third argument would be the call back function
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port number 8000");
});

// type localhost:8000 on your browser to view your server that you just created
