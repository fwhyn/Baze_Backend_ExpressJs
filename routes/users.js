var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('Got a GET request');
});

router.put('/user', (req, res) => {
    res.send('Got a PUT request');
});

router.delete('/user', (req, res) => {
    res.send('Got a DELETE request');
});

module.exports = router;
