var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const cors = require("cors");

const app = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));

app.listen(8000, function () {
  console.log("Example app listening on port 8000!");
});

app.get("/", function (req, res) {
  res.sendFile('/dist/index.html', { root: '.' });
});

const weatherbit_apikey = '0fa1512f75ae4d4a83a2300568f6d981';
app.get("/weatherbit-apikey", function (req, res) {
  res.send(weatherbit_apikey);
});