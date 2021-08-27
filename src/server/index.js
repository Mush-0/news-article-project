var path = require("path");
const express = require("express");
require("dotenv").config();
const mockAPIResponse = require("./mockAPI");
var cors = require("cors");

// console.log(process.env.API_key);

var app = express();

app.use(cors());

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

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
