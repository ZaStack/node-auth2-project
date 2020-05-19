const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const server = express();
const usersRouter = require('../users/router');
const authRouter = require('../auth/router');
const restricted = require('../auth/token-validation');

server.use(helmet());
server.use(express.json());
server.use(morgan('dev'));
server.use(cors());
server.use('/api/auth', authRouter);
server.use('/api/users', restricted, checkRole('user'), usersRouter);

server.get('/', (req, res) => {
    res.send('Surprise, M***********r! Server is working');
});

function checkRole(role) {
    return (req, res, next) => {
        if (
            req.decodedToken &&
            req.decodedToken.role &&
            req.decodedToken.role.toString().toLowerCase() === role
        ) {
            next();
        } else {
            res.status(403).json({ you: 'Shall not pass!' });
        }
    };
}

module.exports = server;
