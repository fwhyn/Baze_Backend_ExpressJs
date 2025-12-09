var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('Hello World!');
});

router.post('/', (req, res) => {
    res.send('Got a POST request');
});

module.exports = router;
