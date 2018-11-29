require('dotenv').config({path: '../.env'});
const express = require('express');
const unirest = require('unirest');
const router = express.Router();
const HS_API_KEY = process.env.HS_API_KEY;

// // Retrieve ALL cards(Collectable/NonCollectable)
// router.get('/all', (req, res) => {
//     unirest
//         .get("https://omgvamp-hearthstone-v1.p.mashape.com/cards")
//         .header("X-Mashape-Key", HS_API_KEY)
//         .end(function (result) {
//             console.log(result.status, result.headers, result.body);
//             res.status(200).send(result);
//         });
// });

// Collectable Classic Set Route 
router.get('/', (req, res) => {
    console.log("-1 IS THIS BEING REACHED? 1-")
    (unirest
        .get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/sets/Classic?collectable=1/")
        .header("X-Mashape-Key", HS_API_KEY)
        .end(function (result) {
            console.log(result.status);
            // console.log(result.headers);
            // console.log(result.body);
            res.status(200).send(result);
    }))
    console.log("-2 IS THIS BEING REACHED? 2-")
    .get()
    .then(result => {
        if (!result) {
            res.status(404).json({ errorMessage: "Could Not Retrieve Classic Set" })
        } else {
            res.status(200).json(result)
        }
    })
    .catch(error => {
        res.status(500).json({ errorMessage: "General API Error" })
    })
    console.log("-3 IS THIS BEING REACHED? 3-")
})

module.exports = router;
