const express = require('express');

const carRouter = require("./cars/car-router.js")

const server = express();

server.use(express.json());

server.use("/api/cars", carRouter)

server.get("/", (req, res) => {
    res.send("Car router is working!!!")
});

module.exports = server;