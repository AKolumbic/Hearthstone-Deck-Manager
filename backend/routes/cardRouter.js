require('dotenv').config({path: '../.env'});
const express = require('express');
const unirest = require('unirest');
const HS_API_KEY = process.env.HS_API_KEY;

// Initizalization/setup
const router = express.Router();

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

module.exports = router;
