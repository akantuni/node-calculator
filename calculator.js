const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  res.send("The answer is: " + (num1 + num2));
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  height = Number(req.body.height);
  weight = Number(req.body.weight);
  bmi = Math.floor(weight / (height ** 2));
  res.send("Your BMI is: " + bmi);
});

app.listen(3000);
