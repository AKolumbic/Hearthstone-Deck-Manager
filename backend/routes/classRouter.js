require('dotenv').config({path: '../.env'});
const express = require('express');
const unirest = require('unirest');
const HS_API_KEY = process.env.HS_API_KEY;

// Initizalization/setup
const router = express.Router();

// Accepts a Class and returns all cards, collectible and non-collectible. 
// Each Class has a dedicated endpoint for collectible cards.
router.get('/:id', (req, res) => {
    let { HSclass } = req.params.id;
    console.log(HSclass);
    unirest
        .get(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/${HSclass}`)
        .header("X-Mashape-Key", HS_API_KEY)
        .end((result) => {
            console.log(result.status);
            console.log(result.headers);
            // console.log(result.body);
            res.status(200).send(result);
        });
});

// Returns all collectible Druid cards
router.get('/druid/', (req, res) => {
    unirest
        .get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/druid?collectible=1")
        .header("X-Mashape-Key", HS_API_KEY)
        .end((result) => {
            console.log(result.status);
            console.log(result.headers);
            // console.log(result.body);
            res.status(200).send(result);
        });
});

// Returns all collectible Hunter cards
router.get('/hunter/', (req, res) => {
    unirest
        .get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/hunter?collectible=1")
        .header("X-Mashape-Key", HS_API_KEY)
        .end((result) => {
            console.log(result.status);
            console.log(result.headers);
            // console.log(result.body);
            res.status(200).send(result);
        });
});

// Returns all collectible Mage cards
router.get('/mage/', (req, res) => {
    unirest
        .get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/mage?collectible=1")
        .header("X-Mashape-Key", HS_API_KEY)
        .end((result) => {
            console.log(result.status);
            console.log(result.headers);
            // console.log(result.body);
            res.status(200).send(result);
        });
});

// Returns all collectible Paladin cards
router.get('/paladin/', (req, res) => {
    unirest
        .get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/paladin?collectible=1")
        .header("X-Mashape-Key", HS_API_KEY)
        .end((result) => {
            console.log(result.status);
            console.log(result.headers);
            // console.log(result.body);
            res.status(200).send(result);
        });
});
// Returns all collectible Priest cards
router.get('/priest/', (req, res) => {
    unirest
        .get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/priest?collectible=1")
        .header("X-Mashape-Key", HS_API_KEY)
        .end((result) => {
            console.log(result.status);
            console.log(result.headers);
            // console.log(result.body);
            res.status(200).send(result);
        });
});

// Returns all collectible Rogue cards
router.get('/rogue/', (req, res) => {
    unirest
        .get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/rogue?collectible=1")
        .header("X-Mashape-Key", HS_API_KEY)
        .end((result) => {
            console.log(result.status);
            console.log(result.headers);
            // console.log(result.body);
            res.status(200).send(result);
        });
});

// Returns all collectible Shaman cards
router.get('/shaman/', (req, res) => {
    unirest
        .get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/shaman?collectible=1")
        .header("X-Mashape-Key", HS_API_KEY)
        .end((result) => {
            console.log(result.status);
            console.log(result.headers);
            // console.log(result.body);
            res.status(200).send(result);
        });
});

// Returns all collectible Warlock cards
router.get('/warlock/', (req, res) => {
    unirest
        .get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/warlock?collectible=1")
        .header("X-Mashape-Key", HS_API_KEY)
        .end((result) => {
            console.log(result.status);
            console.log(result.headers);
            // console.log(result.body);
            res.status(200).send(result);
        });
});

// Returns all collectible Warrior cards
router.get('/warrior/', (req, res) => {
    unirest
        .get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/warrior?collectible=1")
        .header("X-Mashape-Key", HS_API_KEY)
        .end((result) => {
            console.log(result.status);
            console.log(result.headers);
            // console.log(result.body);
            res.status(200).send(result);
        });
});

module.exports = router;
