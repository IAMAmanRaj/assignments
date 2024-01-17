// const request = require("supertest");
// const assert = require("assert");
const express = require("express");

const app = express();

let requestCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

//my solution
//next() is a function that is used to pass control to the next middleware function in the pipeline. It is necessary to call next() to ensure that the request continues to be processed by subsequent middleware functions or route handlers.
//By including this middleware function using app.use(), it will be executed for every incoming request to the server, regardless of the route.
app.use((req, res, next) => {
  requestCount++; //update the variable
  next();
});

app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.get("/requestCount", function (req, res) {
  res.status(200).json({ requestCount });
});

module.exports = app;
