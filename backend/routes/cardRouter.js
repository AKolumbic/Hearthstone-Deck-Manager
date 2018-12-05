require('dotenv').config({path: '../.env'});
const express = require('express');
const unirest = require('unirest');
const classes = require('./classRouter');
const HS_API_KEY = process.env.HS_API_KEY;

// Initizalization/setup
const router = express.Router();

// returns all cards organized by 
router.use('/class/', classes);

// Returns all available Hearthstone cards including non collectible cards.
router.get('/', (req, res) => {
    unirest
        .get("https://omgvamp-hearthstone-v1.p.mashape.com/cards")
        .header("X-Mashape-Key", HS_API_KEY)
        .end((result) => {
            console.log(result.status);
            console.log(result.headers);
            // console.log(result.body);
            res.status(200).send(result);
        });
});

// Returns cards by partial name. Collectible only.
router.get('/search/:id', (req, res) => {
    let { query } = req.params.id;
    console.log(query);
    // TODO: use regex to replace '%'s for spaces. Middleware? // return str.replace(/\s/g, '%');
    unirest
        .get(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/${query}?collectible=1`)
        .header("X-Mashape-Key", HS_API_KEY)
        .end((result) => {
            console.log(result.status);
            console.log(result.headers);
            // console.log(result.body);
            res.status(200).send(result);
        });
});

// Returns all collectible cards in a set. Example values: Blackrock Mountain, Classic.
// KNOWN ISSUE: Curse of Naxxramas
router.get('/set/:id', (req, res) => {
    const { set } = req.params.id;
    console.log(set)
    unirest
        .get(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/sets/${set}?collectible=1`)
        .header("X-Mashape-Key", HS_API_KEY)
        .end((result) => {
            console.log(result.status);
            console.log(result.headers);
            // console.log(result.body);
            res.status(200).send(result);
        });
});

// Returns all the collectible cards of a certain tribe. Example values: Mech, Murloc.
// NOTE: I use "tribe" instead of "race" as the API does to better reflect language devs/players use.
router.get('/tribe/:id', (req, res) => {
    const { tribe } = req.params.id;
    console.log(tribe)
    unirest
        .get(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/races/${tribe}?collectible=1`)
        .header("X-Mashape-Key", HS_API_KEY)
        .end((result) => {
            console.log(result.status);
            console.log(result.headers);
            // console.log(result.body);
            res.status(200).send(result);
        });
});

// Returns all the collectible cards of a certain quality. 
// Valid qualities in decending order: Legendary, Epic, Rare, Common
router.get('/quality/:id', (req, res) => {
    const { quality } = req.params.id;
    console.log(quality)
    unirest
        .get(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/qualities/${quality}?collectible=1`)
        .header("X-Mashape-Key", HS_API_KEY)
        .end((result) => {
            console.log(result.status);
            console.log(result.headers);
            // console.log(result.body);
            res.status(200).send(result);
        });
});

module.exports = router;
