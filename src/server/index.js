var path = require("path");
const express = require("express");
require("dotenv").config();
const mockAPIResponse = require("./mockAPI");
var cors = require("cors");

var app = express();

app.use(cors(), express.json());

console.log(path.join(__dirname, "../client"));
app.use("/static", express.static(path.join(__dirname, "../client")));

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log("Example app listening http://127.0.0.1:8080/");
});

app.post("/validate", function (req, res) {
  // const key=process.env.API_key

  const url = req.body.url;
  
  console.log(url);
  res.send(mockAPIResponse);
});
