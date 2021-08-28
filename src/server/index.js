const express = require("express");
const path = require("path");
const cors = require("cors");
const mockAPIResponse = require("./mockAPI");
const fetch = require("node-fetch");
require("dotenv").config();

function timeStamp() {
  const currentTime = new Date().toString().split(" ");
  const date = [currentTime[2], currentTime[1], currentTime[3]].join("-");
  const time = currentTime[4];

  return `\x1b[32m${time + " " + date}\x1b[0m`;
}
const app = express();

app.use(cors(), express.json());

console.log(path.join(__dirname, "../../dist"));
app.use("/", express.static(path.join(__dirname, "../../dist")));

// app.get("/", function (req, res) {
//   // res.sendFile('dist/index.html')
//   res.sendFile(path.join(__dirname, "../../dist/index.html"));
// });

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log("Example app listening http://127.0.0.1:8080/");
});

app.post("/validate", function (req, res) {
  // const key=process.env.API_key
  const url = req.body.url;
  const API_url = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_key}&url=${url}&lang=auto`;
  console.log(
    timeStamp(),
    "Sending POST request with URL: ",
    `\x1b[31m${url}\x1b[0m`
  );
  fetch(API_url, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((resAPI) => {
      console.log("Remaining Credit:", resAPI.status.remaining_credits);
      if (resAPI.status.msg !== "OK") {
        console.log(resAPI);
        res.send(`{"error":"failed","problem":"${resAPI.status.msg}"}`);
        return;
      }
      res.send(resAPI);
    });
});
