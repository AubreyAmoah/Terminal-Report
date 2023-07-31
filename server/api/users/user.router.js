const { registerAdmin, adminLogin, getAdminDetails } = require('./user.controller');
const { handleAdminRefreshToken, handleLogout } = require('../tokens/token.controller');
const { checkToken } = require('../../middleware/validate_token');

const router = require('express').Router();

router.post('/admin/register', registerAdmin);
router.post('/admin/login', adminLogin);

router.get('/admin/refresh', handleAdminRefreshToken);
router.get('/admin/get/details', getAdminDetails);
router.get('/admin/logout', handleLogout);


module.exports = router;