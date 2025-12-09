var express = require('express');
var router = express.Router();

router.all('/secret', (req, res, next) => {
    console.log('Accessing the secret section ...');

    // Simple authentication check: Look for a specific Authorization header
    if (req.headers.authorization === 'Bearer my-secret-token') {
        console.log('Authentication successful!');
        next(); // pass control to the next handler
    } else {
        console.log('Authentication failed!');
        res.status(401).send('Unauthorized: Access is denied.');
    }
});

// This GET handler for '/secret' will only run if the `router.all` middleware above calls next()
router.get('/secret', (req, res, next) => {
    res.send('Welcome to the secret area. You have been authenticated!');
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('Hello World!');
});

router.post('/', (req, res) => {
    res.send('Got a POST request');
});

module.exports = router;
