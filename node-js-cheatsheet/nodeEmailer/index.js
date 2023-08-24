const express = require("express");
const sendMail = require("./sendEmail");
const app = express();
let port = 5000;

app.get("/", (req, res) => {
  res.send("i am a server");
});

app.get("/email", sendMail);

const start = async () => {
  try {
    app.listen(5000, () => {
      console.log(`i am live on ${port}`);
    });
  } catch (error) {}
};

start();
