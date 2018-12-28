require('dotenv').config();
const express = require('express');
const cors = require('cors');
const unirest = require('unirest');
const cards = require('./routes/cardRouter');

// Environment Variables
const HS_API_KEY = process.env.HS_API_KEY;
const port = process.env.PORT || 8000;

// Setup
const server = express();
server.use(express.json());

// CORS 
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204.
}
server.use(cors(corsOptions));

// Sanity Check
server.get('/', (req, res) => res.send('The server is up and running!'));

// API Routes and Endpoints
// Returns all cards, collectable and noncollectable. See Documentation for further endpoints.
server.use('/cards/', cards);

// Returns a list of current patch, classes, sets, types, factions, qualities, races and locales.
server.get('/info/', (req, res) => {
    unirest
        .get("https://omgvamp-hearthstone-v1.p.mashape.com/info")
        .header("X-Mashape-Key", HS_API_KEY)
        .end((result) => {
            // console.log(result.status);
            // console.log(result.headers);
            // console.log(result.body);
            res.status(200).send(result);
        });
});

// Returns a list of all the card backs.
server.get('/cardbacks/', (req, res) => {
    unirest
        .get("https://omgvamp-hearthstone-v1.p.mashape.com/cardbacks")
        .header("X-Mashape-Key", HS_API_KEY)
        .end((result) => {
            // console.log(result.status);
            // console.log(result.headers);
            // console.log(result.body);
            res.status(200).send(result);
        });
});

// Dr. Boom Frontend Test Route
server.get('/boom/', (req, res) => {
    unirest
        .get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/Dr.%20Boom?collectible=1")
        .header("X-Mashape-Key", HS_API_KEY)
        .end((result) => {
            if (!result) {
                res.status(500).send({ error: "Error Getting Card Info"})
            }
            console.log(result.status);
            console.log(result.headers);
            console.log(result.body);
            console.log("BOOM!")
            res.status(200).send(result);
        });
});

// Initializing the server
server.listen(port, () => console.log(`The server is listening on port ${port}`));

module.exports = server;
