require('dotenv').config();

import express from 'express';


const server = express();
server.use(express.json());


server.get('/', (req, res) => {
  res.json({ message: 'Welcome AUTH API'});
});

server.all('*', (req, res) => {
  res.json({ message: `Sorry, no such route, try again!`});
});

export default server;