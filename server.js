const express = require('express');

const db = require('./data/dbConfig');

const CarsRouter = require('./data/cars/cars-router');

const server = express();

server.use(express.json());

server.use('/api/cars', CarsRouter);

server.get('/', (req, res) => {
    res.send('<h3>DB Helpers with knex</h3>');
  });

module.exports = server;