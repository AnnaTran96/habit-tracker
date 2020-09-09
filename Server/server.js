const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const port = process.env.PORT || 3000;

const trackerRoutes = require('./routes/routes')
server.use('/tracker', trackerRoutes)

const practiceRoutes =require('./routes/practice')
server.use('/practice', practiceRoutes) 

const registerRoutes = require('./routes/register')
server.use('/register', registerRoutes)

// Root route
server.get('/', (req, res) => res.send('Hello, Health Track!'))

server.listen(port, () => console.log(`Express now departing from http://localhost:${port}!`))