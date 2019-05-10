const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('./data/projectsRouter');
const actionsRouter = require('./data/actionsRouter');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);
module.exports = server;