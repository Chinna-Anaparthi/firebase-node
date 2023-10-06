const Server_Logic = require('../Logic/Server')
const express = require('express');
const router = express.Router();
const app = express();
var parser = require("body-parser");
const dotenv = require("dotenv").config();
app.use(parser.json());
const cors = require('cors');
app.use(cors());
const ip = '172.17.15.7';
const port = process.env.PORT;

const mongoose = require("mongoose");


mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("hosting MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.post("/UserPost", (req, res, next) => {
    Server_Logic.DataPost(req, res, () => {});
});

app.get("/UserGet", (req, res, next) => {
  Server_Logic.DataGet(req, res, () => {});
});

app.put("/UserUpdate/:id", (req, res, next) => {
  Server_Logic.DataPut(req, res, () => {});
});

app.delete("/UserDelete/:id", (req, res, next) => {
  Server_Logic.DataDelete(req, res, () => {});
});
app.listen(port, ip, () => {
    console.log(`Server listening on port http://${ip}:${port}`);
  });
  
  module.exports = app; 