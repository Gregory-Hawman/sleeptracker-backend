const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('../users/user-router');
const authRouter = require('../auth/auth-router.js');
const authenticate = require('../middleware/authenticate.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/users', authenticate, usersRouter);
server.use('/api/auth', authRouter);

server.get("/", (req, res) => {
    res.json({ api: "up" });
});
  
module.exports = server;