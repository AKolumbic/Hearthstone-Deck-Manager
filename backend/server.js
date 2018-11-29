require('dotenv').config();
const express = require('express');
const cors = require('cors');
const classic = require('./routes/cardRouter');
const unirest = require('unirest');
const HS_API_KEY = process.env.HS_API_KEY;
const port = process.env.PORT || 5555;

// Initialize/Setup
const server = express();
server.use(express.json());

// CORS 
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
server.use(cors(corsOptions));

// Sanity Check
server.get('/', (req, res) => res.send(`The server is up and running!`));

// API routes
// server.use('/classic/', classic) // Test for routing for classic cards
server.get('/cards/', (req, res) => {
    unirest
        .get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/set/Classic?collectable=1")
        .header("X-Mashape-Key", HS_API_KEY)
        .end((result) => {
           console.log(result.status);
        //    console.log(result.headers);
        //    console.log(result.body);
           res.status(200).send(result)
        });
});

server.get('/drboom/', (req, res) => {
    unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/Dr.%20Boom?collectible=1")
        .header("X-Mashape-Key", HS_API_KEY)
        .header("Accept", "application/json")
        .end(function (result) {
            console.log(result.status);
            // console.log(result.headers);
            // console.log(result.body);
            res.status(200).send(result)
        });
})

server.get('/druid/', (req, res) => {
    unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/Druid?collectible=1&locale=enUS")
    .header("X-Mashape-Key", "24NZMWVvNYmsh1gW9rVfjIxmc4lpp12V4lqjsn6lE6aneloTAp")
    .end(function (result) {
        console.log(result.status);
        // console.log(result.headers);
        // console.log(result.body);
        res.status(200).send(result)
    });
})

// initializing the server
server.listen(port, () => console.log(`The server is listening on port ${port}`));

module.exports = server;
