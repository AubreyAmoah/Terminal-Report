const express = require('express');
const seedModel = require('../controllers/seed');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
})

module.exports = router;