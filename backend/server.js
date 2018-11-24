require('dotenv').config();
const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
const cards = require('./routes/cardRouter');
const port = process.env.PORT || 5555; 
const server = express();
server.use(express.json());
server.use(cors());


// mongoose.Promise = global.Promise; // mongoose's promise library is deprecated, so we sub in the general ES6 promises here
// const databaseOptions = {
//     useNewUrlParser: true, // mongoose's URL parser is also deprecated, so we pass this in as a option to use the new one
// };
// mongoose.set('useCreateIndex', true); // collection.ensureIndex is also deprecated so we use 'useCreateIndex' instead

// // connecting to the database
// mongoose.connect(process.env.MONGODB_URI, databaseOptions);
// mongoose.connection
//     .once('open', () => console.log('The database is connected'))
//     .on('error', (err) => console.warn(err));


// Sanity Check
server.get('/', (req, res) => res.send(`The server is up and running!`));

// API routes
server.use('/cards', cards) // route for grabbing cards

// initializing the server
server.listen(port, () => console.log(`The server is listening on port ${port}`));

module.exports = server;
