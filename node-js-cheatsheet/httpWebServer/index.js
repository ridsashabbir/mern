const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  if (req.url == "/") {
    res.end("Hello from home");
  } else if (req.url == "/about") {
    res.end("Hello from about");
  } else if (req.url == "/contact") {
    res.end("Hello from contact");
  } else if (req.url == "/userapi") {
    fs.readFile(`${__dirname}/userAPI/userapi.json`, (err, data) => {
      console.log(err);
      console.log(data.toString());
      const objData = JSON.parse(data.toString());
      console.log(objData);
      // res.end(data.toString());
      res.end(objData[0].name);
    });
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1> 404 error. Page does not exist </h1>");
  }
});

// first argument would be the port number and second argument would be the local host server
// port number should be the one that is unused at the moment, here we are using 8000
// third argument would be the call back function
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port number 8000");
});

// type localhost:8000 on your browser to view your server that you just created
