const express = require("express");
const morgan = require("morgan");

const database = require("./database");

const app = express();

app.use(morgan("common"));

app.get("/", function(req, res, next) {
  database.raw('select VERSION() version')
    .then(([rows, columns]) => rows[0])
    .then((row) => res.json({ message: `Hello from MySQL ${row.version}` }))
    .catch(next);
});

app.get("/healthz", function(req, res) {
  res.send("I am happy and healthy\n");
});

module.exports = app;