const express = require('express');
const authController = require('../controllers/auth');
const seedController = require('../controllers/seed');

const router = express.Router();

router.post('/register', authController.register );

router.post('/master/login', authController.login_master);

router.post('/create/admin', seedController.createAdmin );

module.exports = router;