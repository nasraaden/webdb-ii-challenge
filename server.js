const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send("It's working!!!")
});

module.exports = server;