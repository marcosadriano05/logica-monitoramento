const express = require('express');
const cors = require('cors');
const data = require('./data.json');

const server = express();

server.use(express.json());

server.use(cors());

server.get('/', (req, res) => {
  res.json(data);
});

server.listen(3333, () => console.log('Server on port 3333'));