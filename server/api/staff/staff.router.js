const { addStaff, staffLogin } = require('./staff.controller');

const router = require('express').Router();

router.post('/staff/register', addStaff);
router.post('/staff/login', staffLogin);


module.exports = router;