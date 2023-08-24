// second way
// reading from a stream
// create a readable stream
// handle stream events -> data, end and error

const fs = require("fs");
const http = require("http");

// first way
// const server = http.createServer();
// server.on("request", (req, res) => {
//   fs.readFile("input.txt", (err, data) => {
//     if (err) {
//       return console.error(err);
//     }
//     res.end(data.toString());
//   });
// });

// server.listen(8000, "127.0.0.1");

// second way
// const server = http.createServer();
// server.on("request", (req, res) => {
//   const rstream = fs.createReadStream("input.txt");
//   rstream.on("data", (chunkdata) => {
//     res.write(chunkdata);
//   });
//   rstream.on("end", () => {
//     res.end();
//   });
//   rstream.on("error", (err) => {
//     console.log(err);
//     res.end(" error occured");
//   });
// });
// server.listen(8000, "127.0.0.1");

// stream pipe
const server = http.createServer();
server.on("request", (req, res) => {
  const rstream = fs.createReadStream("input.txt");
  rstream.pipe(res);
});
server.listen(8000, "127.0.0.1");
