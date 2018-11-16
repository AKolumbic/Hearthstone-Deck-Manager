const express = require('express');
const unirest = require('unirest');
const router = express.Router();
const HS_API_KEY = process.env.HS_API_KEY

router.get('/', (req, res) => {
    unirest
        .get("https://omgvamp-hearthstone-v1.p.mashape.com/cards")
        .header("X-Mashape-Key", HS_API_KEY)
        .end(function (result) {
            console.log(result.status, result.headers, result.body);
        });
});

module.exports = router;
